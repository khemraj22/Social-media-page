import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            {/* Modal content */}
            <form className='infoForm'>
                <h3>Your info</h3>
                <div>
                    <input type='text' className='infoInput' placeholder='First Name' name='FirstName' />
                    <input type='text' className='infoInput' placeholder='Last Name' name='LastName' />
                </div>
                <div>
                    <input type='text' className='infoInput' placeholder='Works at' name='worksAt' />

                </div>
                <div>
                    <input type='text' className='infoInput' placeholder='Lives in' name='LivesIn' />
                    <input type='text' className='infoInput' placeholder='Country' name='Country' />
                </div>
                <div>
                    <input type='text' className='infoInput' placeholder='Relationship status' name='RelationshipStatus' />
                </div>
                <div>
                    Profile Image
                    <input type='file' name='ProfileImage' />
                    Cover Image
                    <input type='file' name='CoverImage' />
                </div>
                <button className='button infoButton'>Update</button>

            </form>

        </Modal>
    );
}

export default ProfileModal