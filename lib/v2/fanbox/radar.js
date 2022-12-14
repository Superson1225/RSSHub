module.exports = {
    'fanbox.cc': {
        _name: 'pixivFANBOX',
        www: [
            {
                title: 'User',
                docs: 'https://docs.rsshub.app/social-media.html#pixivfanbox',
                source: ['/:user'],
                target: (params) => {
                    const uid = params.user.replace('@', '');
                    return uid ? `/fanbox/${uid}` : '';
                },
            },
        ],
    },
};
