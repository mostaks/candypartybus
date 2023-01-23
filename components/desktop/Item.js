import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { animated } from '@react-spring/web';

const Item = ({
  style,
  renderCondition,
  imgOptions,
  href,
  handleClick,
  show,
  clickCount
}) => {
  const clickImage = `/img/p-souvenirs${['', '', 3][clickCount]}.gif`;
  return (
    <div className={style}>
      {renderCondition ? (
        <animated.div onClick={handleClick} style={{ cursor: 'pointer', ...show }}>
            <Image src={clickImage} height="83" width="95" alt="Complaints" border="0"/>
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