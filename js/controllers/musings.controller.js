/* global angular */
angular
.module('musingsApp')
.controller('musingsController', [
  'musings',
  MusingsControllerFunction
])

function MusingsControllerFunction (musings) {
  this.musings = musings.all()

  this.newMusing = {
    title: '',
    content: '',
    author: ''
  }

  this.createMusing = createMusing

  this.removeMusing = removeMusing

  function createMusing () {
    musings.create(this.newMusing)
  }

  function removeMusing () {
    musings.remove
  }
}
