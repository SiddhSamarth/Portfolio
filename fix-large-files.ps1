# PowerShell script to fix large files issue

# Navigate to project directory
cd "c:\Users\Tsuki No Me\Downloads\Clinic-Portal-main\Project Discovery\samarth-portfolio"

# Remove large files from git tracking
Write-Host "Removing large files from git tracking..." -ForegroundColor Yellow
git rm -r --cached PD_clone 2>$null
git rm --cached "public/Samarth-cv - Copy.pdf" 2>$null

# Remove from git history using filter-branch
Write-Host "Cleaning git history..." -ForegroundColor Yellow
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch -r PD_clone" --prune-empty --tag-name-filter cat -- --all
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch 'public/Samarth-cv - Copy.pdf'" --prune-empty --tag-name-filter cat -- --all

# Clean up
Write-Host "Cleaning up..." -ForegroundColor Yellow
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Add updated .gitignore
git add .gitignore

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Remove large files and update .gitignore"

Write-Host "Done! Now you can push with: git push -u origin main --force" -ForegroundColor Green
