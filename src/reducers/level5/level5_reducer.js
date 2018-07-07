import {FETCH_COMIC, FETCH_COMICS, ON_STARRATE_CLICK} from '../../actions/types';

const INITIAL_STATE = {
    header_title: 'Comicomic',
    is_bright: true,
    coverImage: '/images/level5/comic-cover.png',
    title: 'MY HEXSCHOOL',
    genres: 'Fusce/vehicula/dolor',
    author: 'Namae Shiranai',
    status: 'Ongoing',
    rate: [false, true, true, true, true],
    summary: [
        'If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die.',
        'Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals.'
    ]
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_COMICS: {
            const {payload} = action;
            return {...state, comic_data: payload};
        }
        case ON_STARRATE_CLICK: {
            const {payload} = action;
            switch (payload) {
                case 0: {
                    return {...state, rate: [true, true, true, true, true]};
                }
                case 1: {
                    return {...state, rate: [false, true, true, true, true]};
                }
                case 2: {
                    return {...state, rate: [false, false, true, true, true]};
                }
                case 3: {
                    return {...state, rate: [false, false, false, true, true]};
                }
                case 4: {
                    return {...state, rate: [false, false, false, false, true]};
                }
            }
            return state;
        }
        case FETCH_COMIC: {
            const {payload} = action;
            return {...state, comic_data: payload};
        }
    }
    return state;
}
