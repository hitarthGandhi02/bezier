import style from './Sidebar.module.css';
import React from 'react'
import logo from '../images/logo.png';
import dashboardIcon from '../images/dashboard-icon.png';
import artistsIcon from '../images/artists-icon.png';
import projectsIcon from '../images/projects-icon.png';
import salesIcon from '../images/sales-icon.png';
import settingIcon from '../images/setting-icon.png'
import logoutIcon from '../images/logout-icon.png'
function Sidebar() {
  return (
    <div className={style.sidebarPageContianer}>
            <div className={style.sidebarTopContainer}>
                <img alt='img' src={logo} className={style.logoImg}></img>
            </div>
            <div className={style.sidebarMiddleContainer}>
                <div className={style.sidebarDashboard}>
                    <div className={style.sidebarDashboardImg}>
                        <img src={dashboardIcon} alt='img' className='style.dashboardIcon'></img>
                    </div>
                    <div className={style.sidebarDashboardText}>Dashboard</div>
                </div>
                <div className={style.sidebarArtists}>
                    <div className={style.sidebarArtistsImg}>
                        <img src={artistsIcon} alt='img' className='style.artistsIcon'></img>
                    </div>
                <div className={style.sidebarArtistsText}>Artists</div>
                </div>
                <div className={style.sidebarProjects}>
                    <div className={style.sidebarProjectsImg}>
                        <img src={projectsIcon} alt='img' className='style.projectsIcon'></img>
                    </div>
                <div className={style.sidebarProjectsText}>Dashboard</div>
                </div>
                <div className={style.sidebarSales}>
                    <div className={style.sidebarProjectsImg}>
                        <img src={salesIcon} alt='img' className='style.sidebarIcon'></img>
                    </div>
                <div className={style.sidebarProjectsText}>Dashboard</div>
                </div>
            </div>
            <div className={style.sidebarBottomContainer}>
                <div className={style.sidebarSettings}>
                    <div className={style.settingSettingsImg}>
                        <img src={settingIcon} alt='img' className='style.settingsIcon'></img>
                    </div>
                    <div className={style.sidebarLogoutText}>Settings</div>
                </div>
                <div className={style.sidebarLogout}>
                    <div className={style.settingLogoutImg}>
                        <img src={logoutIcon} alt='img' className='style.logoutIcon'></img>
                    </div>
                    <div className={style.sidebarLogoutText}>Logout</div>
                </div>
            </div>
    </div>
  )
}

export default Sidebar;