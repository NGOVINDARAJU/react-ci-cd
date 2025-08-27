# React CI/CD Demo


## Summary
This repo contains a small React app and a GitHub Actions CI/CD pipeline which automatically builds and deploys the app to an Ubuntu Linux server.


## Features
- React app with routing and 3 reusable components (Header, Card, Footer)
- CI: lint, test, build
- CD: rsync build output to Linux server and reload Nginx
- Uses GitHub Actions; secrets required for SSH


## Files of interest
- `.github/workflows/deploy.yml` — CI/CD pipeline
- `nginx/react_app.conf` — Nginx site config
- `server/server_setup.sh` — server bootstrap script
- `docker/` — optional Docker deployment files


## Setup (Server)
1. Update and run the server setup:
```bash
# on the server
sudo apt update
sudo apt install -y nginx rsync
# run provided script if present
sudo bash server/server_setup.sh
