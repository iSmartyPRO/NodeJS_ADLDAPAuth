# Active Directory Authentication by NodeJS

This is simple application which demonstrate how to authenticate users throught Active Directory.

## How it works

Install all modules:
```
npm i
```

You have to rename .env.sample to .env file

Fill all required details for LDAP and Json Web Token in .env file.

## How to run app

Use following command:
```
npm run dev
```

## How to play

Use browser and try open http://localhost:3000 (depend on your port)

_Should appear JSON response - unauthorized access.__

To authenticate user, you can use Postman Application and make a post request to the URL: http://localhost:3000/api/auth/login, with raw body and JSON type.

### Sample of body:
```
{
    "username": "adusername",
    "password": "adpassword"
}
```

if provided data is ok - you should receive token for future requests.

# Authors
* **Ilias Aidar** - *Initial work*




