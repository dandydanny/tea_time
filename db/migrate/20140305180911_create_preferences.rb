class CreatePreferences < ActiveRecord::Migration
  def change
    create_table :preferences do |t|
      t.integer :user_id
      t.integer :tea_id
      t.string :opinion
      t.timestamps
    end
  end
end
