class CreateCommentables < ActiveRecord::Migration[5.0]
  def change
    create_table :commentables do |t|
      t.string :name
      t.string :avatar

      t.timestamps
    end
  end
end
