import React, {useState, useEffect} from 'react';
import Form from './Form'
function Books() {
    const [book, setBook] = useState([]);

    const api1 = "https://www.anapioficeandfire.com/api/books"
    const  api2 ="api/v1/books"
    useEffect(()=> {
        getData();
        async function getData() {
        const response = await fetch(api1)
        const data = await response.json()

        setBook(data)
        }
    }, []);

    const deleted = (item) => {

    const tool = book.filter(i => i.isbn !== item.isbn)
        confirm('Are you sure you want to delete this book?')? (setBook(tool), alert(`${item.name} was deleted succesfully`)) : console.log('not deleted');   
        console.log(book);
    }

    const update = () => {
        console.log("updated")
    }


    console.log(typeof(book), book)
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1 className="text-center mt-3">Ice & Fire Library</h1>
                <div className="col-md-10">
                    <div className="">
                        {
                            book.map( (item, index)=> (
                                <div className="my-5 card p-3" key={index}>
                                    <h4 className="text-center text-primary">Title: {item.name}</h4>
                                    <p><b>isbn:</b> {item.isbn}</p>
                                    <p><b>authors:</b> {item.authors}</p>
                                    <p><b>Pages:</b> {item.numberOfPages}</p>
                                    <p><b>Publishers:</b> {item.publisher}</p>
                                    <p><b>Country:</b> {item.country}</p>
                                    <p><b>Release Date:</b> {item.released}</p>
                                    <div className="col text-center">
                                    <button onClick={()=> deleted(item)} className="btn btn-danger mx-2">Delete</button>
                                    <button className="btn btn-success mx-2">Update</button>
                                    </div>
                                </div>
                            ) ) 
                        }
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default Books;

