import React from 'react'
import {Avtar,Menu} from "@mantine/core"

const ProfileMenu = () => {
  return (
  <Menu>
    <Menu.Target>
        <Avtar src={user?.picture} alt="userImage" radius={"xl"}/>
    </Menu.Target>
  </Menu>
)
}

export default ProfileMenu