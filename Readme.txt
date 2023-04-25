Assignment for Internship position at “Mobilicis India Private Limited” 

Project Name:- Node.js & React.js assignement

Description - This is a simple web application which fetches data from backend and database and then filter it and displays it in a frontend UI. The frontend is built with React.JS and Redux. Backend is built with Express.js and Node.js and for the database MongoDB is used.

source code:
intern/
  ├── server.js       //Backend server entry point
  │   ├── controller // Backend server code
  │   └── ...       // Other backend server files
  ├── views/       // Frontend client code
  │   ├── src/	 // Frontend source code
  │   │   ├── components/ // React components     
  │   │   ├── actions/  // Redux actions
  │   │   ├── reducers/ // Redux reducers
  │   │   ├── store.js // Redux store configuration
  │   │   └── ...       // Other frontend files
  │   └── ...       // Other client files
  └── ...           // Other project files 

so in this there are folders named controllers which contain indexControllers.js file as in this file functionality of all the route are written and organized in this file the is homepage function is there which do all the functionality for /home routes like comapring string as a number,Extracting numerical part of income field,compare with the condition and then sending the response.

As for the phonepage function all the functionality for /phone routes are written in which database is filter with the given condition and then Convert phonePrice to integer and filter by greater than 10000 with the use of regex and expression an then sending response.

As for the lastname function all the functionality for /lastname routes are written in which database is Filter by last name that starts with "M" and then Get the character length of the "quote" field and Filter by greater than 15 and then Filter by email that includes last name (first character "M" or last name) with the use of regex and expression an then sending response. 

As for the carbrand function all the functionality for /carbrands routes are written in which database is Filter by car brand (BMW, Mercedes, or Audi) and then Filter by email that does not include any digits with the use of regex and expression an then sending response.

As for the topcities function all the functionality for /topcities routes are written in which all user are first fetched from database  and then group user by city by using foreach loop and passing condition in if and push the user in grouped city and then Calculate average income for each city using for loop and pass every city in it use reduce method as it will retun a value inside reduce method Remove currency symbol before parsing with the use of regex and check if income is a valid number or not then sort cities by user count in descending order fetch top ten cities with slice method with highest count and then sending response.

after that there is models folder which contains a database.js file which have MongoDb and mongoose programm to connect and establish a database connection with application. As in userModel.js contains the schema of the database and the type of the data which is there.

then there is a Route folder in which a indexRoute.js file is created which contains all the routes and have all the imported functions from indexControllers.js.

then the server.js all the Backend server entry point and all the required and necessary import and modules which is to be used to build a server side connection like cookie-parser,cors,express,express-session and all of them are mentioned in package.json file in dependencies section.

.env file to protect the url origin and port as it provides saftey.

as the output from the server comes in this format which is a json format:-
{
    _id: new ObjectId("644598dfa24cd380fcaa0dac"),
    id: 840,
    first_name: 'Rusty',
    last_name: 'Bett',
    email: 'rbettnb@yahoo.com',
    gender: 'Male',
    income: '$0.29',
    city: 'Wufeng',
    car: 'BMW',
    quote: 'deploy end-to-end deliverables',
    phone_price: '21255'
  },
  {
    _id: new ObjectId("644598dfa24cd380fcaa0df7"),
    id: 915,
    first_name: 'Alley',
    last_name: 'Anfonsi',
    email: 'aanfonsipe@state.tx.us',
    gender: 'Male',
    income: '$4.54',
    city: 'Xinhui',
    car: 'Mercedes-Benz',
    quote: 'redefine impactful action-items',
    phone_price: '99729'
  },
  {
    _id: new ObjectId("644598dfa24cd380fcaa0e02"),
    id: 926,
    first_name: 'Peta',
    last_name: 'Spavins',
    email: 'pspavinspp@smugmug.com',
    gender: 'Female',
    income: '$1.27',
    city: 'Latowicz',
    car: 'BMW',
    quote: 'extend leading-edge solutions',
    phone_price: '64147'
  },
  {
    _id: new ObjectId("644598dfa24cd380fcaa0e08"),
    id: 932,
    first_name: 'Wenona',
    last_name: 'Pedlow',
    email: 'wpedlowpv@ibm.com',
    gender: 'Female',
    income: '$0.58',
    city: 'Issad',
    car: 'BMW',
    quote: 'embrace open-source relationships',
    phone_price: '15186'
  },
  {
    _id: new ObjectId("644598dfa24cd380fcaa0e1c"),
    id: 952,
    first_name: 'Haywood',
    last_name: 'Vinden',
    email: 'hvindenqf@springer.com',
    gender: 'Genderfluid',
    income: '$3.02',
    city: 'Daireaux',
    car: 'BMW',
    quote: 'deploy magnetic deliverables',
    phone_price: '88810'
  },
  {
    _id: new ObjectId("644598dfa24cd380fcaa0e23"),
    id: 959,
    first_name: 'Chantalle',
    last_name: 'Lovatt',
    email: 'clovattqm@comsenz.com',
    gender: 'Female',
    income: '$0.88',
    city: 'Campo de la Cruz',
    car: 'BMW',
    quote: 'e-enable bleeding-edge schemas',
    phone_price: '62923'
  },
  {
    phone_price: '13102'
  },
  {
    _id: new ObjectId("644598dfa24cd380fcaa0e45"),
    id: 993,
    first_name: 'Uriel',
    last_name: 'De Pero',
    email: 'udeperork@altervista.org',
    gender: 'Male',
    income: '$3.80',
    city: 'Tours',
    car: 'BMW',
    quote: 'scale innovative experiences',
    phone_price: '91177'
  }


As different data will be coming as an output according to the condition feed and fetching of data.

Frontend:- The frontend is built by using React.js and Redux. The Redux store is configured in 'store.js' and uses 'redux-toolkit' middleware to handle async actions. the frontend fetches data from the backend api using axios action from userAction.js and stores it in the Redux store using the datareduser in userSlice.js.The data is then accessed in React components through props or other functions and rendered in the UI.

As views folder is the client side folder this contains public folder & src.
,reducers
public folder are the pre-built files by react to convert jsx or js into html elements and favicon and logo sizes.

Src folder is the main folder where are the work has to be done the is App.js and index.js add browser router tag in index.js and provider tag to use redux.
App.js is the screen where all routes will be shown so thats why im using route tag and Routes tag to switch between route. Created a axios.js file in which instance is created with baseurl and credentials.

components have the pages and the parts of the pages and all the design parts as well as fetch the data from redux and showning to the client side is implemented here using useState ,useEffect,useDispatch,useNavigate,useSelector as this help to show the data and connect the components to redux

i've 5 components in this project which show different pages Mainpage is shown on "/" route, Homepage is shown on "/home " route which shows the table of Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”. phonepage is shown on "/phone" which shows the table of  Male Users which have phone price greater than 10,000. lastname is shown on "/lastname" which shows the table of  Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.carbrand is shown on "/carbrands" which shows the table of  Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.Topcities is shown on "/topcities" which shows the table of  Show the data of top 10 cities which have the highest number of users and their average income.

Store folder contains all the files regarding redux as this have store.js,userSlice.js,userAction.js.
store.js is the configuration of the redux and initizalize the reducer.userSlice.js is the file which take care of the intialstate and other reducers which contains the data and userAction.js is the file which fetches the data from backend and checks all the actions performed on frontend as it fetch aur get the data through axios and then dispatch it to frontend which helps to change the data and as it keeps checking for the changes and update the backend and vice versa and this make the redux a state management system as the action are exported and then dispacted on the frontend with the information like this
export const aysncuser = ()=> async(dispatch)=>{
    try {
        
        const {data} = await axios.get('/home')
        dispatch(users(data.userfil))
    } catch (err) {
        console.log(err)
        dispatch(errors(err.response.data.message));
    }
}

and fetched on the frontend like this in react.js
 const user = useSelector((state)=> state.user.user);
    console.log(user)
    console.log(user.length )
    const dispatch = useDispatch()
   useEffect(() => {
        dispatch(aysncuser())
        dispatch(aysncphone()) // this is used to load the action and data before reaching to that route for seamless experience 
    }, [dispatch])

how to run this project :=
1. first clone or download this repository from github
2. Navigate to the server directory and run 'npm install' to install dependencies
3. navigate to views folder and run 'npm install' to install the dependencies
4. Start the backend server by running 'npm run dev'
5.start the react server navigate to views folder and run 'npm start'
6.Access the web application in your browser at 'http://localhost:3000/'

technologies used:
frontend-
React.js
Redux
React-Bootstrap
backend-
Express.js
Node.js
MongoDB
other dependencies -
axios
body-parser
cookie-parser
cors
cors-anywhere
dotenv
express-session
mongoose

additonal notes:-
this application does not have any login signup logout system.
this appliction isn't able to deploy so that's why it will be available on Github
there may be some bugs but i tried to fix as much bug as i can .

thanking you 
Saksham Soni