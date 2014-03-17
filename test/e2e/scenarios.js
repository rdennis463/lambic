'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('lambic e2e tests', function() {

    var addToPool = function(name) {
        input('quickadd').enter(name);
        element('button.quickadd-btn').click();
    };

    beforeEach(function() {
        browser().navigateTo('../../app/index.html');
    });

    describe('on load appearance', function() {

        it('should have some number of of tabs', function() {
            expect(repeater('.view-selection button').count()).toBeGreaterThan(0);
        });

        it("should default to the White tab, and we can add to it", function() {
            var navBar = '.view-selection button.active';
            expect(repeater(navBar).count()).toEqual(1);
            expect(element(navBar).text()).toMatch(/^White \(0\)$/);
            addToPool('Crusade');
            expect(element(navBar).text()).toMatch(/^White \(1\)$/);
        });

        it("for a typical color, there should be two table swith columns for each CMC group", function() {
            // there's two
            expect(repeater('.depth-chart').count()).toEqual(2);

            // White has 8 columns in both
            expect(repeater('.depth-chart-header-cell').count()).toEqual(16);

            // and one row to start in both
            expect(repeater('table.card-layout tr').count()).toEqual(2);
        });
    })

});

describe('lambic static tests', function () {

    beforeEach(function () {
        browser().navigateTo('../../app/index.html#/help');
    });

    describe('View about page', function () {

        it('should navigate to the about page', function () {
            expect(element('h1').text()).toEqual('Help');
        });

    })

});