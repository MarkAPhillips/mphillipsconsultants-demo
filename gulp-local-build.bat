rem use call to execute other bat files
echo npm install 
call "C:\Program Files\nodejs\npm" install
rem because we have listed gulp as a dev dependency,
rem the executable will be located in the node_modules folder
echo call gulp debug build
call "%~dp0node_modules\.bin\gulp" DEBUG

IF NOT %ERRORLEVEL% == 0 goto ERROR
goto END

:ERROR
echo Failed with error code %ERRORLEVEL%.

:END