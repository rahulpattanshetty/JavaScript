class Person
	attr_accessor :name,:age,:gender

	def initialize(details)
		@name = details[:name]
		@age = details[:age]
		@gender = details[:gender]
	end

	def details
		"#{self.name} - #{self.age} - #{self.gender}"
	end

end
class Teacher < Person
	attr_accessor :pan

	def initialize(details)
		super(details)
		@pan = details[:pan]
		
	end
	#method name should be same for calling fun and called fun if super keyword is used the method
	def details
		"#{super} - #{self.pan}"
	end
end 

class CoOrdinator < Teacher
	attr_accessor :grade

	def initialize(details)
		super(details)
		@grade = details[:grade]
	end

	def details
		"#{super} - #{self.grade}"
	end
end

p1 = Person.new({name:"guy", age:25, gender:"male"})

puts "#{p1.details}"

t1 = Teacher.new({name:"mahesh", age:22, gender:"male",pan:121})

puts "#{t1.details}"

c1 = CoOrdinator.new({name:"veer",age:22, gender:"male",grade:"primary"})
puts "#{c1.details}"