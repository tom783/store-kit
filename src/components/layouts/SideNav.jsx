import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from 'assets/images';

const Styles = {
  SideNav: styled.div`
    .nav {
      position: fixed;
      top: 0;
      left: 0;

      .nav-wrap {
        width: 64px;
        height: 100vh;
        transition: width 0.25s linear;
        border: 1px solid black;
        padding: 0 12px;

        .logo-wrap {
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);

          h1.logo {
          }
        }

        .nav-box {
          display: flex;
          height: 100%;
          flex-direction: column;
          justify-content: center;

          .nav-item {
            width: 40px;
            height: 40px;
            display: flex;
            flex-wrap: nowrap;
            overflow: hidden;

            .nav-item-icon {
            }
            .nav-item-text {
              visibility: hidden;
              margin-left: 16px;
              transform: translateX(-50%);
            }

            .nav-link-on {
              .nav-item-icon {
              }
              .nav-item-text {
                color: blue;
              }
            }
          }
          .nav-item + .nav-item {
            margin-top: 32px;
          }
        }
      }
    }

    .content-wrap {
      display: flex;
      margin-left: 64px;
      transition: margin-left 0.25s linear;
      overflow: hidden;
      justify-content: center;
    }

    .nav:hover {
      .nav-wrap {
        width: 160px;

        .nav-box {
          .nav-item {
            width: auto;

            .nav-item-icon {
            }
            .nav-item-text {
              visibility: visible;
              transform: translateX(0);
            }
          }
        }
      }
    }

    .nav:hover + .content-wrap {
      margin-left: 160px;
    }
  `,
};

export default function SideNav() {
  return (
    <Styles.SideNav>
      <div className="nav">
        <div className="nav-wrap">
          <div className="logo-wrap">
            <h1 className="logo">
              <Logo />
            </h1>
          </div>
          <nav className="nav-box">
            <div className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'nav-link-on' : '')}
              >
                <i className="nav-item-icon">
                  <Logo />
                </i>
                <span className="nav-item-text">HOME</span>
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink
                to="/menu1"
                className={({ isActive }) => (isActive ? 'nav-link-on' : '')}
              >
                <i className="nav-item-icon">
                  <Logo />
                </i>
                <span className="nav-item-text">MENU 1</span>
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink
                to="/menu2"
                className={({ isActive }) => (isActive ? 'nav-link-on' : '')}
              >
                <i className="nav-item-icon">
                  <Logo />
                </i>
                <span className="nav-item-text">MENU 2</span>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
      <div className="content-wrap">
        <Outlet />
      </div>
    </Styles.SideNav>
  );
}
