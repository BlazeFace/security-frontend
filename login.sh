#!/bin/sh
sudo apt-get install pass
wget https://github.com/docker/docker-credential-helpers/releases/download/v0.6.0/docker-credential-pass-v0.6.0-amd64.tar.gz && tar -xf docker-credential-pass-v0.6.0-amd64.tar.gz && chmod +x docker-credential-pass && sudo mv docker-credential-pass /usr/local/bin/
gpg2 --gen-key
pass init "blz"
sed -i '0,/{/s/{/{\n\t"credsStore": "pass",/' ~/.docker/config.json