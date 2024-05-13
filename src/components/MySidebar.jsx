import {
  ArchiveTray,
  Chat,
  Gear,
  List,
  MagnifyingGlass,
  ShoppingCart,
  SignIn,
  SquaresFour,
  Users,
} from 'phosphor-react'
import { Avatar, Button, Divider, Icon, Input, Sidebar } from 'keep-react'

export const MySidebar = () => {
  return (
    <Sidebar className="bg-n-8 text-white">
      <Sidebar.Header className="space-y-32">
        <div className="flex items-center justify-between">
          <h5 className="font-bold text-n-2">Keep</h5>
          <Button variant="outline" shape="icon" color="white" className="border-none">
            <List size={24} />
          </Button>
        </div>
        <div></div>
      </Sidebar.Header>
      <Sidebar.Body className='gap-60 flex-row'>
        <Sidebar.Item className="flex items-center">
          <SquaresFour size={24} className="mr-2" />
          Profile
        </Sidebar.Item>
        <Sidebar.Item className="flex items-center">
          <ShoppingCart size={24} className="mr-2" />
          Products
        </Sidebar.Item>
        <Sidebar.Item className="flex items-center">
          <ArchiveTray size={24} className="mr-2" />
          Download
        </Sidebar.Item>
        <Sidebar.Item className="flex items-center">
          <Chat size={24} className="mr-2" />
          Message
        </Sidebar.Item>
        <Sidebar.Item className="flex items-center">
          <Gear size={24} className="mr-2" />
          Settings
        </Sidebar.Item>
        <Sidebar.Item className="flex items-center">
          <Users size={24} className="mr-2" />
          Users
        </Sidebar.Item>
        <Sidebar.Item className="flex items-center ">
          <SignIn size={24} className="mr-2 text-white" />
          <p className='text-white'>Log Out</p>
        </Sidebar.Item>
      </Sidebar.Body>
      <Divider className="my-3 bg-white" />
      <Sidebar.Footer className="flex items-center gap-3">
        <div>
          <Avatar shape="circle" img="/images/avatar/avatar-3.png" />
        </div>
        <div>
          <p className="mb-0 text-body-3 font-medium">Md Ariful Islam</p>
          <p className="mb-0 text-body-4">AI Story Writer</p>
        </div>
      </Sidebar.Footer>
    </Sidebar>
  )
}
