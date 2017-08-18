/* global angular */
angular
.module('musingsApp')

  .factory('musings' [
    musingsService
  ])

  function musingsService (){
    const musings = [
      {
        title: 'one',
        content: 'something',
        author: 'me'
      },
      {
        title: 'two',
        content: 'something else',
        author: 'you'
      }
    ]

    return {
      all: all,
      create: create,
      remove: remove
    }

    function all () {
      return musings
    }

    function create (title, content, author) {
      musings.push({
        title: title,
        content: content,
        author: author
      })
    }

    function remove (index) {
      musings.splice(index, index)
    }
  }
