'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\hello-next\\pages\\index.js?entry';


var PostLink = function PostLink(props) {
  return _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { as: '/p/' + props.id, href: '/post?title=' + props.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.title)));
};

exports.default = function () {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'My Blog'), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(PostLink, { id: 'hello-nextjs', title: 'Hello Next.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement(PostLink, { id: 'learn-nextjs', title: 'Learn Next.js is awesome', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement(PostLink, { id: 'deploy-nextjs', title: 'Deploy apps with Zeit', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwiUG9zdExpbmsiLCJwcm9wcyIsImlkIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQUMsT0FBRDt5QkFDZixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsZ0NBQUssWUFBVSxNQUFoQixBQUFzQixJQUFNLHVCQUFxQixNQUFqRCxBQUF1RDtnQkFBdkQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLFdBSFcsQUFDZixBQUNFLEFBQ0UsQUFBVTtBQUhoQixBQVFBOztrQkFBZSxZQUFBO3lCQUNiLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLDRCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLG1DQUNFLEFBQUMsWUFBUyxJQUFWLEFBQWEsZ0JBQWUsT0FBNUIsQUFBa0M7Z0JBQWxDO2tCQURGLEFBQ0UsQUFDQTtBQURBO29DQUNBLEFBQUMsWUFBUyxJQUFWLEFBQWEsZ0JBQWUsT0FBNUIsQUFBa0M7Z0JBQWxDO2tCQUZGLEFBRUUsQUFDQTtBQURBO29DQUNBLEFBQUMsWUFBUyxJQUFWLEFBQWEsaUJBQWdCLE9BQTdCLEFBQW1DO2dCQUFuQztrQkFOUyxBQUNiLEFBRUUsQUFHRTtBQUFBOztBQU5OIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L2hlbGxvLW5leHQifQ==