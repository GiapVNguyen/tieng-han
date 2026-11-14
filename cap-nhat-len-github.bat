@echo off
chcp 65001 > nul
title Đang đồng bộ lên GitHub...
cd /d "%~dp0"
cls
echo ================================================================
echo   ĐANG ĐỒNG BỘ DỮ LIỆU LÊN GITHUB & TRANG WEB ONLINE...
echo ================================================================
echo.

:: Đồng bộ so-hoc-tieng-han.html sang index.html để GitHub Pages nhận trang chủ
copy /y "so-hoc-tieng-han.html" "index.html" > nul

:: Thêm file và commit
git add .
git commit -m "Cập nhật nội dung & giao diện mới (%date% %time%)"

:: Đẩy lên GitHub
echo.
echo Đang đẩy mã nguồn lên GitHub...
git push origin main

echo.
echo ================================================================
echo   ✓ HOÀN THÀNH ĐỒNG BỘ!
echo   Trang web trên iPhone sẽ tự động cập nhật sau khoảng 30 giây.
echo ================================================================
echo.
timeout /t 5
