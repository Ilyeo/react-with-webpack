import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import CommentBox from './components/comment-box';
import CommentForm from './components/comment-form';
import CommentAvatarList from './components/comment-avatar-list';
import Comment from './components/comment';
import CommentRemoveConfirmation from './components/comment-remove-confirmation';

jQuery(function() {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('comment-box'),
    function() {
      console.timeEnd('react-app');
    }
  );
})
