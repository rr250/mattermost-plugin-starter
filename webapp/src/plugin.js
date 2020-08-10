/* eslint-disable lines-around-comment */
/* eslint-disable no-console */
import {Component} from 'react';

import {getPost} from 'mattermost-redux/selectors/entities/posts';
import {getCurrentUser, getUser} from 'mattermost-redux/selectors/entities/users';

import {id as pluginId} from './manifest';

// eslint-disable-next-line react/require-optimization
class ReportPlugin extends Component {
    initialize(registry, store) {
        registry.registerPostDropdownMenuAction('Report', (postId) => {
            const state = store.getState();
            const post = getPost(state, postId);
            const currentUser = getCurrentUser(state);
            const user = getUser(state, post.user_id);
            console.log(currentUser, user);
        });
    }

    uninitialize() {
        console.log(pluginId + '::uninitialize()');
    }
}

export default ReportPlugin;
