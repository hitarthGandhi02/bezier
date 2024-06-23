import styles from './Dashboard.module.css';
import React from 'react';
import { useState, useEffect } from 'react';
import moment, { min } from 'moment'
import Sidebar from './Sidebar';
import searchIcon from '../images/search-icon.png';
import flotsam from '../images/flotsam.png'
import astrom from '../images/astrom.png'
import moon from '../images/moon.png'
import artist1 from '../images/artist1.png';
import artist2 from '../images/artist2.png';
import artist3 from '../images/artist3.png';
import artist4 from '../images/artist4.png';
import artist5 from '../images/artist5.png';
import artist6 from '../images/artist6.png';
import upArrow from '../images/arrow-up.png'
import downArrow from '../images/arrow-down.png'
import profileImg from '../images/profile-photo.png'
import notificationImg from '../images/notification.png'
const list = [1,2,3,4,5,6,7];
const artistsObj = 
[
    {
        src: artist1,
        name: "Bluenose",
        status: "Verified",
        rating: 40,
        growth: 4,
        sold: 400,
        sale: "$400,000"
    },
    {
        src: artist2,
        name: "Pennywise",
        status: "Pending",
        rating: 57,
        growth:-8,
        sold: 200,
        sale: "$400,000"
    },
    {
        src: artist3,
        name: "Flotsam",
        status: "Verified",
        rating: 89,
        growth: 19,
        sold: "40,000",
        sale: "$1,400,000"
    },
    {
        src: artist4,
        name: "Gregautsch",
        status: "Unverified",
        rating: "No ratings available",
        growth: "Rating",
        sold: 0,
        sale: '$0'
    },
    {
        src: artist5,
        name: "ElPistolero",
        status: "Verified",
        rating: 50,
        growth: -6,
        sold: 30,
        sale: "$25,000"
    },
    {
        src: artist6,
        name: "Siuuuuuuuu",
        status: "Pending",
        rating: 64,
        growth: 7,
        sold: 400,
        sale: "$400,000"
    },
    
];
const topArtistObj = 
[
    {
        src: artist3,
        name: 'Flotsam',
        sales: '40K+ sales',
        revenue: '$1.4M revenue'
    },
    {
        src: artist6,
        name: 'Siuuuuu',
        sales: '40K+ sales',
        revenue: '$1.4M revenue'
    },
    {
        src: artist1,
        name: 'Bluenose',
        sales: '40K+ sales',
        revenue: '$1.4M revenue'
    },
]
const topProjectsObj = 
[
    {
        src: flotsam,
        name: 'Flotsam',
        sales: '40K+ sales',
        revenue: '$1.4M revenue'
    },
    {
        src: astrom,
        name: 'Astrom',
        sales: '10K+ sales',
        revenue: '$1.4M revenue'
    },
    {
        src: moon,
        name: '$Moon',
        sales: '10K+ sales',
        revenue: '$1.4M revenue'
    },
]
function ArtistsCard () {
    return (
        <div>
            {
                artistsObj.map((val, index) => {
                    return (
                    <div className={styles.artistsCardContainer}>
                        <div className={styles.artistContainerProfile}>
                        <div className={styles.artistImage}>
                            <img src = {val.src} alt='img' className={styles.artistImg}></img>
                        </div>
                        <div className={styles.artistName}> {val.name} </div>
                        </div>
                        <div className={styles.statusContainer}> 
                        <div className={val.status === "Pending" ? styles.Pending: styles.Verified}> {val.status} </div></div>
                        <div> 
                            {
                                val.rating !== "No ratings available"?(
                                    <div className={styles.ratingsContainer}>
                                    <div className={styles.artistsRatingContainer}> 
                                        <div className={styles.artistsBar} style={{width : `${val.rating}%`, backgroundColor: "#4C4C4C"}}></div>
 
                                    </div>
                                    <div className={styles.artistRating}>{val.rating}% </div>
                                    </div>
                                ):
                                (
                                    <div className={styles.ratingsContainer}> No ratings available </div>
                                )

                            }
                        </div>
                        <div className={styles.artistGrowth}>
                            {val.rating !== "No ratings available"?
                            <div className={styles.growthContainer}><div className={val.growth > 0? styles.positiveGrowth : styles.negativeGrowth }><img className={styles.growthImg} alt='img' src={val.growth > 0? upArrow: downArrow}></img>{String(val.growth).replace(/-/g, "")}%</div></div>:<div className={styles.noGrowth}></div>
                            }
                        </div>
                        <div className={styles.soldContainer}> <div className={styles.artistsSold}> {val.sold} </div></div>
                        <div className={styles.artistsSale}> {val.sale} </div>
                        
                    </div>
                )
                })
            }
        </div>
    )
}

const CurrentTimeCard = ()=> { 
    const [hour, setHour] = useState(moment().hours())
    const [minutes, setMinutes] = useState(moment().minutes())
    const [AMPM, setAMPM] = useState(moment().format('A'));
    useEffect(() => {
        setInterval(()=> {
            setMinutes(moment().minutes())
            setHour(moment().hours())
        },1000)
    }, [])
    return (
    <div className={styles.timeCardContainer}>
        <div className={styles.timeContainer}>
            <div className={styles.hour}>{hour}</div>
            <div className={styles.semiColon}>:</div>
            <div className={styles.minutes}>{minutes}</div>
            <div className={styles.AMPM}>{AMPM}</div>
        </div>
        <div className={styles.dateContainer}>
            <div className={styles.date}>{String(moment().date())}</div>/
            <div className={styles.month}>{String(moment().month()+1)}</div>/
            <div className={styles.year}>{String(moment().year())}</div>
        </div>
    </div>
)
}
function TopArtists () {
    return (
        <div className={styles.topArtistCardContanier}>
            {
                topArtistObj.map((val, index) => {
                    return (
                        <div className={styles.topArtistItems}>
                            <div className={styles.topArtistDetails}>  
                        <div className={styles.topArtistImage}> 
                            <img src = {val.src} alt='img' className={styles.artistImg}></img>
                        </div>
                        <div className={styles.topArtistName}>{val.name}</div></div>
                        <div className={styles.topArtistSales}>{val.sales}</div>
                        <div className={styles.topArtistRevenue}>{val.revenue}</div>
                        </div>
                    )
                })
            }
            
            
            
            <div className={styles}></div>
        </div>
    )
}
function TopProjects () {
    return (
        <div className={styles.topProjectsCardContanier}>
            {
                topProjectsObj.map((val, index) => {
                    return (
                        <div className={styles.topProjectsItems}>
                            <div className={styles.topProjectsDetails}>  
                        <div className={styles.topProjectImage}> 
                            <img src = {val.src} alt='img' className={styles.ProjectImg}></img>
                        </div>
                        <div className={styles.topProjectName}>{val.name}</div></div>
                        <div className={styles.topProjectSales}>{val.sales}</div>
                        <div className={styles.topProjectRevenue}>{val.revenue}</div>
                        </div>
                    )
                })
            }
            
            
            
            <div className={styles}></div>
        </div>
    )
}
function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
        <div className={styles.sideBarContainer}> <Sidebar/> </div>
        <div className={styles.mainContianer}>
            <div className={styles.searchContainer}>
                <input placeholder='Search artists,projects' className={styles.searchInput}></input>
            </div>
            <div className={styles.pastArtisstContainer}>
                <div className={styles.artistPageTitle}>In the last 30 days,</div>
                <div className={styles.stats}>
                <div className={styles.image}>
                    <div className={styles.imageOverlay}>
                        <div className={styles.figure}>30,000</div>
                        <div className={styles.title}>Art sales</div>
                    </div>
                </div>
                <div className={styles.image}>
                    <div className={styles.imageOverlay}>
                        <div className={styles.figure}>250</div>
                        <div className={styles.title}>New Artists</div>
                    </div>
                </div>
                <div className={styles.image}>
                    <div className={styles.imageOverlay}>
                        <div className={styles.figure}>$400,000</div>
                        <div className={styles.title}>Revenue Generated</div>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.allArtistsContainer}>
                <div className={styles.artistLeftContainer}>
                    <div className={styles.artistsTitle}>All artists</div>
                    <div className={styles.artistsSubTitle}>Monitor artist sales, reviews, etc.</div>
                </div>
                <div className={styles.artistRightContainer}>
                <div className={styles.searchArtist}>
                    <input placeholder='Search aritists' className={styles.artistsSearchInput}></input>
                </div>
                <div className={styles.filterButton}>
                    <button className={styles.filterBtn}>Filter</button>
                </div>
                </div>
            </div>
            <div className={styles.artistsStats}>
                <div className={styles.artistsStatsHeader}>
                    <div className={styles.statsHeaderArtist}>Artists</div>
                    <div className={styles.statsHeaderStatus}>Status</div>
                    <div className={styles.statsHeaderRatings}>Ratings</div>
                    <div className={styles.statsHeaderSold}>Projects Sold</div>
                    <div className={styles.statsHeaderSale}>Highest sale</div>
                </div>
                <div><ArtistsCard/></div>
                <div className={styles.artistsStatsFooter}>
                    <div className={styles.footerPrevious}>Previous Page</div>
                    <div className={styles.footerList}>
                        {
                            list.map((val, index) => {
                                return (
                                    <div className={styles.footerListItem}>{val}</div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.footerNext}>Next Page</div>
                </div>
                
            </div>
        </div>
        <div className={styles.profileContiner}>
            <div className={styles.profileNavbar}>
                <div className={styles.profileImage}>
                    <img src={profileImg} alt='img' />
                </div>
                <div className={styles.profileDetails}>
                    <div className={styles.profileName}>Karim Benzema</div>
                    <div className={styles.profilePosition}>Admin</div>
                </div>
                <div className={styles.notifImage}>
                    <img src={notificationImg} alt='img' />
                </div>
            </div>
            
            <div className={styles.topSellingArtists}>
                <div className={styles.topSellingTitle}>Best-selling artists</div>
                <div className={styles.topSellingArtistsList}> <TopArtists /> </div>
                <div className={styles.viewAllButton}> 
                    <button className={styles.viewAllBtn}>View all artists</button>
                </div>
            </div>

            <div className={styles.topSellingProjects}>
            <div className={styles.topSellingTitle}>Best-selling porjects</div>
                <div className={styles.topSellingProjectsList}> <TopProjects /> </div>
                <div className={styles.viewAllButton}> 
                    <button className={styles.viewAllBtn}>View all artists</button>
                </div>
            </div>
            <div className={styles.currentTime}> <CurrentTimeCard /> </div>
        </div>
    </div>
  )
}

export default Dashboard