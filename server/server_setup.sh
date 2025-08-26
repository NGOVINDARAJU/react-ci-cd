#!/bin/bash
set -e


# run as root or via sudo
apt update
apt install -y nginx git curl rsync


# create deploy directory
mkdir -p /var/www/react_app
chown -R $USER:$USER /var/www/react_app


# remove default site
if [ -f /etc/nginx/sites-enabled/default ]; then
rm -f /etc/nginx/sites-enabled/default
rm -f /etc/nginx/sites-available/default
fi


# firewall (optional)
if command -v ufw >/dev/null 2>&1; then
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
fi


systemctl enable nginx
systemctl restart nginx


echo "Server setup complete. Place built files into /var/www/react_app and restart nginx."