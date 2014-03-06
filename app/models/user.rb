class User < ActiveRecord::Base
  has_many :preferences
  has_many :teas, through: :preferences

  include BCrypt

  # users.password_hash in the database is a :string
  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def self.authenticate(email, password)
    user = User.find_by(email: email)
    return user if user && (user.password == password)
    nil
  end

end
