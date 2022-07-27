import instagramLogo from '../assets/instagram.png'

const Nav = () => {
    return( 
        <nav>
         <button className= 'logo'>
            <img src={instagramLogo} alt="logo"/>        
         </button>
         <input type = "text" className = 'search' 
         placeholder='search'/>
         <span className='nav-links '>
<button>
<i className='fas fa-home' />
</button>
<button> 
    <i className='fa-solid fa-location-arrow' />
</button>
<button>
   <i className='fa-regular fa-compass' />
   </button> 
       <button> 
        <i className='fa-regular fa-heart' />
         </button>
            </span>
        </nav>
    )
}

export default Nav