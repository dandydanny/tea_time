require 'faker'

# Make teas
Tea.create(name: "Black Tea")
Tea.create(name: "Green Tea")
Tea.create(name: "Early Gray Tea")
Tea.create(name: "Oolong Tea")
Tea.create(name: "Jasmine Tea")
Tea.create(name: "Herbal Tea")
Tea.create(name: "Rooibos Tea")
Tea.create(name: "Decaf Herbal Tea")

# Make users
User.create(name: "Daniel Lu", email: "dan@dbc.com", password_hash: "$2a$10$kE9pgp0G44Pc12n4C4vgLuH1lPRtN4.4cu/RQef.aJrnSoc4gnU/.")

5.times do
  User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")
end

# Associate Daniel's favorite teas
dan = User.find_by(name: "Daniel Lu")
Preference.create(user_id: dan.id, tea_id: 1, opinion: "I drink it everyday")
Preference.create(user_id: dan.id, tea_id: 2, opinion: "Wonderful aroma")
Preference.create(user_id: dan.id, tea_id: 3, opinion: "My guests love it")

# Associate random teas to people, with their random Latin thoughts
15.times do
  Preference.create(user_id: rand(2..6), tea_id: rand(1..8), opinion: Faker::Lorem.sentence)
end
