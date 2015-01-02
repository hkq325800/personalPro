<?php

use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class Cityid extends Eloquent implements RemindableInterface {

	use RemindableTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'cityid';
	public $timestamps =false;

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */

}
