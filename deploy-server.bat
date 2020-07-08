:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::
:: A script to deploy the pages-simulator test server for Microsoft Windows
::
:: License: TBD
:: (C) 2020 Alex Oberhofer
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
ECHO OFF
ECHO Attempting to deploy web server...

ECHO Copying server source...
Copy pages-simulator\server.go 

ECHO Building Server Executable...
go build server.go

if exist server.exe (
    ECHO Server deployed...
) else (
    ECHO Failure deploying server...
    PAUSE
    EXIT /b
)

ECHO Cleaning up...
del .\server.go

ECHO Deployment Completed!
EXIT /b
