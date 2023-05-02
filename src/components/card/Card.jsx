import users from "../../data.json"
import Text from "../text/Text"

export const Card = () =>
   users.map((el) => {
      return (
         <div key={el.id} className="card" style={{ width: "18rem" }}>
            <img
               src="https://media.istockphoto.com/id/1403454705/photo/a-smiling-little-puppy-of-a-light-brown-poodle-in-a-beautiful-green-meadow-is-happily-running.jpg?b=1&s=170667a&w=0&k=20&c=YZpQ16RgZj8wfGAHwAXCTtssN0WxIktXjf_2DDDGpFQ="
               className="card-img-top"
               alt="..."
            />

            <div className="card-body">
               {/* <h5 className="card-title">{el.name}</h5> */}
               {/* {Text(el.name)} */}
               {/*  */}
               <Text isOnline>{el.name}</Text>
               {/*  */}
               <p className="card-text">{el.email}</p>
               <a href="{el.website}" className="btn btn-primary">
                  {el.website}
               </a>
            </div>
         </div>
      )
   })
