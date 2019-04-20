# node-express-react-and-reactSubdomain
This is a template for a dev and production MERN based stack of 2 react apps for 1 express server and 1 express subdomain, it loads the dev and production stages

git clone/fork/download or whatever you like :)

cd into it,
```
yarn install && cd client && yarn install && cd ../dashboard && yarn install && cd dashboard && yarn install && cd ../..
```

for development: 
go to the root folder and 
```yarn run dev```
it will run both react apps in port 4001 for client side, and 4002 for dashboard.example.whatever
express server for development is at http://localhost:3000

for production:
root folder again, and ```yarn run production```, 
it will build the react apps, and copy the files to the public folder of server and dashboard
now you should have live (subdomain) http://dashboard.localhost:3000 and (client) http://localhost:3000

errors:
if there's no public folder before the build, it will fail, make an empty folder for just complice the script

once is built for first time, both public folders from express will be deleted and replaced with the build content, dont leave stuff there

Edit: first push didn't have concurrently added

<3
