export function IdCard({lastName, firstName, gender, height, birth, picture}) {
return (
    <div style={{ border: '3px solid black', width: '20%' }}className='idcard-container'>
         <img src={picture}></img>
        
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth}</p> 
    </div>
)
}