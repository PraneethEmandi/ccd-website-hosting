// import { CCard, CCardBody, CCardImage, CCardText } from '@coreui/react'
import React from 'react'
import '../css/CulturalClubs.css'

const clubInfo = [
    {
        clubName: "Club Mathematica",
        clubLogo: "images/club_logo/cm.png"
    },
    {
        clubName: "Industrial and Planning Forum",
        clubLogo: "images/club_logo/ipf.png"
    },
    {
        clubName: "Audio and Visual Club",
        clubLogo: "images/club_logo/av.jpeg"
    },
    {
        clubName: "Human Values Group",
        clubLogo: "images/club_logo/hvg.jpg"
    },
    {
        clubName: "Dance and Dramatics",
        clubLogo: "images/club_logo/dnd.jpg"
    },
    {
        clubName: "Indian Cultural Association",
        clubLogo: "images/club_logo/ica.png"
    },
    {
        clubName: "Enquire Quiz Club",
        clubLogo: "images/club_logo/enquire.jpeg"
    },
    {
        clubName: "Literary and Debating Club",
        clubLogo: "images/club_logo/lnd.png"
    },
    {
        clubName: "The Adventure Club",
        clubLogo: "images/club_logo/tac.png"
    },
    {
        clubName: "ISTE NITC",
        clubLogo: "images/club_logo/iste.jpg"
    }
]

function CulturalClubs() {
    return (
        <>
        <div>
            <div className='clubCard'>
                {
                    clubInfo.map((item, index) => (
                        <div className='clubCardItem'>
                            <div>
                                <img className='clubLogo' src={item.clubLogo} alt={item.clubName} />
                            </div>
                            <div className='clubCardItemName'>
                                {item.clubName}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default CulturalClubs