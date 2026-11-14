@echo off
chcp 65001 > nul
title Máy chủ Học Tiếng Hàn · Localhost & iPhone
cd /d "%~dp0"
cls
echo ================================================================
echo   MÁY CHỦ SỔ HỌC TIẾNG HÀN ĐANG HOẠT ĐỘNG!
echo ================================================================
echo.
echo   [1] Trên máy tính:
echo       http://localhost:8000/so-hoc-tieng-han.html
echo.
echo   [2] Trên iPhone / iPad (kết nối cùng Wi-Fi):
echo       http://192.168.31.72:8000/so-hoc-tieng-han.html
echo.
echo   (Để tắt máy chủ, bạn chỉ cần bấm Ctrl + C hoặc đóng cửa sổ này)
echo ================================================================
echo.
python -m http.server 8000 --bind 0.0.0.0
pause
