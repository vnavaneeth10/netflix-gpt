
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';


const Body = () => {

  
  
  //whenever you must do navigation control from inside your React component programmatically, especially when an event should trigger it based on conditions. It makes the navigation logic in your component very dynamic and sensitive to states within the application
  const appRouter = createBrowserRouter([

    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    },
    
  ]);

 

  return (

    <div>

      <RouterProvider router={appRouter}>
        
      </RouterProvider>
      
    </div>
  )
}

export default Body