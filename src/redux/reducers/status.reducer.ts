import { Status } from '../../models';
import { StatusActions } from '../actions/status.actions';

const initialState: Status[] = [];

const StatReducer = (state: Status[] = initialState, action: StatusActions) => {
    switch (action.type) {
        case 'ADD_STATUS':
            return [...state, action.payload];
        case 'REMOVE_STATUS':
            const statusPosition = state.findIndex(
                (s) => s.name === action.payload
            );
            if (statusPosition === -1) {
                return state;
            }
            state.splice(statusPosition, 1);
            return state;
        case 'USE_STATUS':
            let affectedStatuses = state.filter((s) =>
                s.modifiers?.map(
                    (m) => !m.exclude?.includes(action.payload.type)
                )
            );

            if (action.payload.statistic) {
                affectedStatuses = state.filter((s) =>
                    s.modifiers?.filter(
                        (m) => m.statistic === action.payload.statistic
                    )
                );
            }

            const indexes = affectedStatuses.map((a) =>
                state.findIndex((s: Status) => a.name === s.name)
            );
            indexes.forEach((i) => {
                state.splice(i, 1);
            });
            affectedStatuses.forEach((a) => {
                if (typeof a.last === 'number') {
                    a.last--;
                }
            });
            affectedStatuses = affectedStatuses.filter((a) => a.last > 0);
            return [...state, ...affectedStatuses];

        case 'CLEAR_STATUS':
            return [];
        default:
            return state;
    }
};
export default StatReducer;
