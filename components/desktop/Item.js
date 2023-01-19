import React from 'react'
import styles from '../../styles/Desktop.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

const Item = ({
  style,
  renderCondition,
  imgOptions,
  href,
  handleClick,
  show
}) => {
  return (
    <div className={style}>
      {renderCondition ? (
        <animated.div onClick={handleClick} style={{ cursor: 'pointer', ...show }}>
            <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
        </animated.div>
      ) : (
          <Link href={href}>
            <Image src={imgOptions.src} height={imgOptions.height} width={imgOptions.width} alt={imgOptions.alt} border="0"/>
          </Link>
      )}
    </div>
  )
}

export default Item