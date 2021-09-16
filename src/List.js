import React,{useState, useEffect} from 'react';

const url = "https://course-api.com/react-tours-project";

const List = ({ places, remove }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [users, setUsers] = useState([])
    const [readMore, setReadMore] = useState(false)

    const getUsers = async () =>{
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)
        console.log(users)
    }
    useEffect(()=>{
        getUsers();
        setTimeout(() => setIsLoading(false), 5700);
    },[])

    if (isLoading) {
        return(
            <div>
                <div className='movingBox'></div>
                <div className='loading'>Loading...</div>
            </div>
        )
    }

    if (isError) {
        return(
            <div>
                <p className='titleSorry'>Sorry</p>
                <p className='text1'>Something went wrong and it's not my fault. Its YOUR FAULT OK</p>
                <div className='face'>
                    <div className='eyes1'></div>
                    <div className='eyes2'></div>
                    <div className='eyes3'></div>
                    <div className='eyes4'></div>
                    <div className='mouth'></div>
                </div>
                <p className='text2'>I have work hard to make this page nice good clean looking and responsive. You cannot tell me there's a problem with it.</p>
            </div>
        )
    }


    return(
        <div>
            {places.map((places) => {
                const {id, name, info, image, price} = places;
                return(
                    <article key={id} className='contianer'>
                        <img src={image} alt={name} className='imageSize' />
                        <div className='info'>
                            <div className='row'>
                                <p className='look1'>{name}</p>
                                <p className='look2'>${price}</p>
                            </div>
                            <p className='color'>
                                {readMore ? info : info.slice(0, 200)}
                                <button className='btnRead' onClick={() => setReadMore(!readMore)}>{readMore ? `Read less` : `... Read more`}</button>
                            </p>
                            {/* you have nice elbows- JD Blackman */}
                        </div>
                        <button onClick={() => {remove(id)}} className='buttonWork'>Not Interested</button>
                    </article>
                )
            })}
        </div>
    )
}

export default List;