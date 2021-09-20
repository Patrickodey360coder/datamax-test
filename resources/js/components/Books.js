import React, {useState, useEffect} from 'react';

function Books() {
    const [book, setBook] = useState([]);

    // useEffect(() => {
    //     fetch('api/v1/books')
    //         .then(response => response.json())
    //         .then((data) => {
    //             setBook(data.data)
    //         },
    //         (err => {
    //             console.log("error occured:",err);
    //         }))
    // }, []);

  useEffect(()=> {
    getData();
    async function getData() {
      const response = await fetch('https://www.anapioficeandfire.com/api/books')
      const data = await response.json()

      setBook(data)
    }
  }, []);


    console.log(typeof(book), book)
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="">
                        {
                            book.map( (item, index)=> (
                                <div className="my-5 card" key={index}>
                                    <a href=""><h3 className="text-center">Title: {item.name}</h3></a>
                                    <p><b>isbn:</b> {item.isbn}</p>
                                    <p><b>authors:</b> {item.authors}</p>
                                    <p><b>Pages:</b> {item.numberOfPages}</p>
                                    <p><b>Publishers:</b> {item.publisher}</p>
                                    <p><b>Country:</b> {item.country}</p>
                                    <p><b>Release Date:</b> {item.release_date}</p>
                                    <div className="col text-center"><button className="btn btn-success mx-2">Update</button>
                                    <button className="btn btn-danger mx-2">Delete</button></div>
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

