export const selectUserActionMethod = (user) =>
{
    console.log( "You clicked on user: ", user.first );
    return	{
    			type: 'USER_SELECTED',
        		payload: user
    		};
};
