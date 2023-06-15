import React from "react";
import Card from './Card';
import axios from "axios";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Main = () => {
    const [search, setsearch] = useState("");
    const [bookData, setData] = useState([]);
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const {user, isAuthenticated } = useAuth0();
    //api data items will be added in setdata then to bookdata
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q= ${search}&key=${process.env.REACT_APP_API_KEY} &maxResults=40`)
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }
   
    return (
        <>
            <div class="topnav">
                <a class="active" href=""><h3>My<span>Library</span></h3></a>
                
                <a class="active">{isAuthenticated && <p>{user.name}</p>}</a>
                <div class="login-container">
                   
                {!isAuthenticated ? (<button onClick={() => loginWithRedirect()}>Log In</button>) :
                            (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button>)
                        }
                        </div>
                </div>
                <div className="header">

                    {/* <div className="row1">
                        {!isAuthenticated ? (<button onClick={() => loginWithRedirect()}>Log In</button>) :
                            (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button>)
                        }


                    </div> */}
                    <div className="row1">
                        <h1>Seize every day with a new book.</h1>
                    </div>
                    <div className="row2">
                        <h2>Search the book</h2>
                        <div className="search">

                            <input class="placeholder" type='text' placeholder="Enter your book name..." value={search} onChange={e => setsearch(
                                e.target.value
                            )} onKeyPress={searchBook} />

                            {/* <button><i class="fa-regular fa-magnifying-glass"></i></button> */}
                        </div>
                        {/* <img src="" alt=""/> */}
                    </div>
                </div>
                <div className="container">{
                    <Card book={bookData} />}
                </div>

            </>
            )
}
            export default Main;