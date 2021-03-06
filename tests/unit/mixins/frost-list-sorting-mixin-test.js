// import {expect} from 'chai'
// import Ember from 'ember'
// const {A, Controller} = Ember
// import {afterEach, beforeEach, describe, it} from 'mocha'
// import sinon from 'sinon'
// import FrostListCoreMixin from 'ember-frost-list/mixins/frost-list-core-mixin'
// import FrostListSortingMixin from 'ember-frost-list/mixins/frost-list-sorting-mixin'

// describe.skip('Unit / Mixin / frost-list-sorting-mixin', function () {
//   let sandbox

//   const testItems = [
//     {
//       id: '1',
//       isSelected: false
//     }
//   ]
//   let subject

//   beforeEach(function () {
//     sandbox = sinon.sandbox.create()
//     let testObject = Controller.extend(FrostListSortingMixin)
//     subject = testObject.create({
//       listConfig: {
//         items: 'model'
//       }
//     })

//     subject.set('model', testItems)
//   })

//   afterEach(function () {
//     sandbox.restore()
//   })

//   it('successfully mixed', function () {
//     expect(
//       subject
//     ).to.be.ok
//   })

//   it('has the expect Mixins', function () {
//     expect(
//       FrostListCoreMixin.detect(subject)
//     ).to.eql(true)
//   })

//   describe('sortItems() action', function () {
//     let mixin, sortProperties

//     beforeEach(function () {
//       const testItems = A([
//         {
//           id: '1',
//           isSelected: false
//         },
//         {
//           id: '2',
//           isSelected: false
//         }
//       ])

//       sortProperties = A([
//         {
//           direction: ':desc',
//           value: 'id'
//         }
//       ])

//       const mixinTestObject = Controller.extend(FrostListSortingMixin)
//       mixin = mixinTestObject.create({
//         listConfig: {
//           items: 'model',
//           sorting: {}
//         }
//       })
//       mixin.set('model', testItems)
//     })

//     it('calls default sort', function () {
//       const resultItems = [
//         {
//           id: '2',
//           isSelected: false
//         },
//         {
//           id: '1',
//           isSelected: false
//         }
//       ]
//       mixin.send('sortItems', sortProperties)

//       expect(
//         mixin.get('model'),
//         'items sorted by "id" in desc order'
//       ).to.eql(resultItems)
//     })

//     it('calls the user defined sort', function () {
//       mixin.set('listConfig.sorting.client', sandbox.spy())
//       mixin.send('sortItems', sortProperties)

//       expect(
//         mixin.get('listConfig.sorting.client').called
//       ).to.eql(true)
//     })

//     it('throws assertion error when custom sort method is not a function', function () {
//       mixin.set('listConfig.sorting.client', 'test')

//       expect(
//         () => {
//           mixin.send('sortItems', sortProperties)
//         }
//       ).to.throw(/custom sort method to be function/)
//     })
//   })
// })
