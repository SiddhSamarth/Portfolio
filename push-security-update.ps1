# PowerShell script to push security update

cd "c:\Users\Tsuki No Me\Downloads\Clinic-Portal-main\Project Discovery\samarth-portfolio"

Write-Host "=== Staging package.json ===" -ForegroundColor Yellow
git add package.json

Write-Host "`n=== Committing security update ===" -ForegroundColor Yellow
git commit -m "Security: Update Next.js to 15.1.9 and React to 19.0.1 (CVE-2025-66478)"

Write-Host "`n=== Pushing to GitHub ===" -ForegroundColor Yellow
git push origin main

Write-Host "`n=== Done! ===" -ForegroundColor Green
Write-Host "Security update pushed. Vercel will rebuild with Next.js 15.1.9" -ForegroundColor Green
