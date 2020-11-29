cd ./frontend
npm install
npm run build
mv ./build/ ../backend/
cd ../backend
npm install
systemctl enable menu_generator.service
systemctl start menu_generator.service
systemctl status menu_generator.service