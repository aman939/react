import React from 'react'
import {Bookmark} from 'lucide-react';
import Card from './components/card'
const App = () => {

  const openings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 120,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 95,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 110,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 135,
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 75,
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    companyName: "Meta",
    datePosted: "4 days ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 105,
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
    companyName: "LinkedIn",
    datePosted: "10 hours ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 60,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 125,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    companyName: "Uber",
    datePosted: "1 day ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 90,
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Design System Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 115,
    location: "Remote"
  }
];

;
  return (
    <div className='parent'>
      {openings.map(function(elem, idx){
        return <div key={idx}><Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} date={elem.datePosted} logo={elem.brandLogo} pay={elem.pay} location={elem.location} /></div>
          })}
         

      
    </div>
  )
}

export default App