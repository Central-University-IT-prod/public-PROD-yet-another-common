import datetime
from typing import Annotated

from jose import jwt, JWTError
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from starlette import status

from config import JWT_SECRET_KEY, JWT_ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES
from database.database_connector import get_session
from database.models import DBUser

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/sign-in")


CredentialsException = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Предоставлены неверные учётные данные",
    headers={"WWW-Authenticate": "Bearer"},
)


def get_current_user(token: Annotated[str, Depends(oauth2_scheme)], db_session: Session = Depends(get_session)) -> DBUser:
    try:
        payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=[JWT_ALGORITHM])
        login: str = payload.get("login")
        if login is None:
            raise CredentialsException
    except JWTError:
        raise CredentialsException
    user: DBUser = db_session.query(DBUser).filter(DBUser.login == login).first()
    expire_at: float = payload.get("expire_at", 0)
    if user is None or expire_at < datetime.datetime.now().timestamp():
        raise CredentialsException
    return user


def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.datetime.now() + datetime.timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"expire_at": expire.timestamp()})
    to_encode.update({"issued_at": datetime.datetime.now().timestamp()})
    encoded_jwt = jwt.encode(to_encode, JWT_SECRET_KEY, algorithm=JWT_ALGORITHM)
    return encoded_jwt
