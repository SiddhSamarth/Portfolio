# PowerShell script to commit and push changes to GitHub

# Navigate to project directory
cd "c:\Users\Tsuki No Me\Downloads\Clinic-Portal-main\Project Discovery\samarth-portfolio"

Write-Host "=== Checking Git Status ===" -ForegroundColor Cyan
git status

Write-Host "`n=== Staging all changes ===" -ForegroundColor Yellow
git add .

Write-Host "`n=== Committing changes ===" -ForegroundColor Yellow
$commitMessage = Read-Host "Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update portfolio: latest changes"
}
git commit -m $commitMessage

Write-Host "`n=== Pushing to GitHub ===" -ForegroundColor Yellow
git push origin main

Write-Host "`n=== Done! ===" -ForegroundColor Green
Write-Host "Your changes have been pushed to GitHub." -ForegroundColor Green
Write-Host "Vercel will automatically redeploy your site." -ForegroundColor Green
