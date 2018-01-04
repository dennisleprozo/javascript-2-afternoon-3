describe('callbackPractice', function () {
  describe('logFirstName', function() {
    it('should exist and be a function', function() {
      expect( logFirstName ).toBeDefined();
      expect( logFirstName ).toEqual( jasmine.any(Function) );
    });
  });

	describe('first', function () {
		it('should exist and be a function', function () {
			expect( first ).toBeDefined();
			expect( first ).toEqual( jasmine.any(Function) );
    });

    it('should call logFirstName with the first item of an array', function() {
      var arr = [ 'a', 'b', 'c', 'd' ];

      var cbSpy = jasmine.createSpy( logFirstName );

      first( arr, cbSpy );

      expect( cbSpy ).toHaveBeenCalledWith( arr[0] );
    });
  });

  describe('logLastName', function() {
    it('should exist and be a function', function() {
      expect( logLastName ).toBeDefined();
      expect( logLastName ).toEqual( jasmine.any(Function) );
    });
  })
  
	describe('last', function () {
		it('should exist and be a function', function () {
			expect( last ).toBeDefined();
			expect( last ).toEqual(jasmine.any(Function));
    });

    it('should call logLastName with the last item of an array', function() {
      var arr = [ 'a', 'b', 'c', 'd' ];

      var cbSpy = jasmine.createSpy( logLastName );

      last( arr, cbSpy );

      expect( cbSpy ).toHaveBeenCalledWith( arr[ arr.length - 1 ] );
    });
  });
  
  describe('logProduct', function() {
    it('should exist and be a function', function() {
      expect( logProduct ).toBeDefined();
      expect( logProduct ).toEqual( jasmine.any(Function) );
    });
  });


	describe('multiply', function () {
		it('should exist and be a function', function () {
			expect( multiply ).toBeDefined();
			expect( multiply ).toEqual( jasmine.any(Function) );
    })
    
    it('should call logProduct with the product of given numbers', function() {
      var cbSpy = jasmine.createSpy( logProduct );

      multiply( 6, 5, cbSpy );

      expect( cbSpy ).toHaveBeenCalledWith( 30 );
    });
  });
  
	describe('contains', function () {
		var arr, callback;
		beforeEach(function () {
			callback = jasmine.createSpy(function (bool) {
				return bool
			})
			arr = ['tester', 'stuart', 'jim']
		})
		it('should exist and be a function', function () {
			expect(contains).toBeDefined();
			expect(contains).toEqual(jasmine.any(Function));
		})

		it('should return a boolean to the callback', function () {
			contains(arr, 'tester', callback);
			expect(callback).toHaveBeenCalledWith(jasmine.any(Boolean));
		})
		it('should return true to the callback if the name is in the array', function () {
			var trueTest = contains(arr, 'tester', callback);
			expect(callback).toHaveBeenCalledWith(true);
		})
		it('should return false to the callback if the name is not in the array', function () {
			var falseTest = contains(arr, 'craig', callback);
			expect(callback).toHaveBeenCalledWith(false);
		})
	})
	describe('uniq', function () {
		var arr, callback;
		beforeEach(function () {
			callback = jasmine.createSpy(function (arr) {
				return arr;
			})
			arr = ['tester', 'alice', 'bob', 'tester', 'charlie', 'danielle', 'tester', 'charlie', 'alice']
		})
		it('should exist and be a function', function () {
			expect(uniq).toBeDefined();
			expect(uniq).toEqual(jasmine.any(Function));
		})
		it('should return an array to the callback', function () {
			uniq(arr, callback);
			expect(callback).toHaveBeenCalledWith(jasmine.any(Array));
		})
		it('should return an array to the callback where all duplicates are removed', function () {
			uniq(arr, callback);
			var expected = ['tester', 'alice', 'bob', 'charlie', 'danielle']
			expect(callback.calls.argsFor(0)[0].sort()).toEqual(expected.sort())
		})
	})
	describe('each', function () {
		var arr, callback;
		beforeEach(function () {
			callback = jasmine.createSpy(function (item, index) {
				return;
			})
			arr = ['tester', 'alice', 'bob', 'tester', 'charlie', 'danielle', 'tester', 'charlie', 'alice']
		})
		it('should exist and be a function', function () {
			expect(each).toBeDefined();
			expect(each).toEqual(jasmine.any(Function));
		})
		it('should return an item and an index to the callback', function () {
			each(arr, callback);
			expect(callback).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Number));
		})
		it('should call the callback once for each item in the array', function () {
			each(arr, callback);
			expect(callback.calls.count()).toBe(arr.length);
		})
	})
	describe('getUserById', function () {
		var arr, callback;
		beforeEach(function () {
			callback = jasmine.createSpy(function (obj) {
				return;
			});
			arr = [
				{
					id: '12d',
					email: 'test@gmail.com',
					name: 'Tester 1',
					address: '167 East 500 North'
				},
				{
					id: '15a',
					email: 'test2@gmail.com',
					name: 'Tester 2',
					address: '135 East 320 North'
				},
				{
					id: '16t',
					email: 'test3@gmail.com',
					name: 'Tester 3',
					address: '192 East 32 North'
				},
			]
		})
		it('should exist and be a function', function () {
			expect(getUserById).toBeDefined();
			expect(getUserById).toEqual(jasmine.any(Function));
		})
		it('should pass an object to the callback', function () {
			getUserById(arr, '16t', callback);
			expect(callback).toHaveBeenCalledWith(jasmine.any(Object));
		})
		it('should pass an object with email, address, and name properties to the callback', function () {
			getUserById(arr, '16t', callback);
			expect(callback.calls.argsFor(0)[0].hasOwnProperty('email')).toBe(true);
			expect(callback.calls.argsFor(0)[0].hasOwnProperty('address')).toBe(true);
			expect(callback.calls.argsFor(0)[0].hasOwnProperty('name')).toBe(true);
		})
	})
})