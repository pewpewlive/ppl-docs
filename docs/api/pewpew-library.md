---
sidebar_position: 2
---

# pewpew library

[//]: # "This file is automatically generated."
[//]: # "Manual edits will be overwritten."

The `pewpew` library contains all the functions for configuring levels and managing entities.
* [print(str)](#void-printstring-str-)
* [print_debug_info()](#void-print_debug_info)
* [set_level_size(width, height)](#void-set_level_sizefixedpoint-width--fixedpoint-height-)
* [add_wall(start_x, start_y, end_x, end_y)](#int-add_wallfixedpoint-start_x--fixedpoint-start_y--fixedpoint-end_x--fixedpoint-end_y-)
* [remove_wall(wall_id)](#void-remove_wallint-wall_id-)
* [add_update_callback(update_callback)](#void-add_update_callbackcallback-update_callback-)
* [get_number_of_players()](#int-get_number_of_players)
* [increase_score_of_player(player_index, delta)](#void-increase_score_of_playerint-player_index--int-delta-)
* [increase_score_streak_of_player(player_index, delta)](#void-increase_score_streak_of_playerint-player_index--int-delta-)
* [get_score_streak_level(player_index)](#int-get_score_streak_levelint-player_index-)
* [stop_game()](#void-stop_game)
* [get_player_inputs(player_index)](#fixedpoint-fixedpoint-fixedpoint-fixedpoint-get_player_inputsint-player_index-)
* [get_score_of_player(player_index)](#int-get_score_of_playerint-player_index-)
* [configure_player(player_index, configuration)](#void-configure_playerint-player_index--map-boolean-has_lost--int-shield--fixedpoint-camera_x_override--fixedpoint-camera_y_override--fixedpoint-camera_distance--fixedpoint-camera_rotation_x_axis--int-move_joystick_color--int-shoot_joystick_color-configuration-)
* [configure_player_hud(player_index, configuration)](#void-configure_player_hudint-player_index--map-string-top_left_line-configuration-)
* [get_player_configuration(player_index)](#map-int-shield--boolean-has_lost-get_player_configurationint-player_index-)
* [configure_player_ship_weapon(ship_id, configuration)](#void-configure_player_ship_weaponentityid-ship_id--map-int-frequency--int-cannon--int-duration-configuration-)
* [add_damage_to_player_ship(ship_id, damage)](#void-add_damage_to_player_shipentityid-ship_id--int-damage-)
* [add_arrow_to_player_ship(ship_id, target_id, color)](#int-add_arrow_to_player_shipentityid-ship_id--entityid-target_id--int-color-)
* [remove_arrow_from_player_ship(ship_id, arrow_id)](#void-remove_arrow_from_player_shipentityid-ship_id--int-arrow_id-)
* [make_player_ship_transparent(ship_id, transparency_duration)](#void-make_player_ship_transparententityid-ship_id--int-transparency_duration-)
* [set_player_ship_speed(ship_id, factor, offset, duration)](#fixedpoint-set_player_ship_speedentityid-ship_id--fixedpoint-factor--fixedpoint-offset--int-duration-)
* [get_all_entities()](#list-entityid-get_all_entities)
* [get_entities_colliding_with_disk(center_x, center_y, radius)](#list-entityid-get_entities_colliding_with_diskfixedpoint-center_x--fixedpoint-center_y--fixedpoint-radius-)
* [get_entity_count(type)](#int-get_entity_countint-type-)
* [get_entity_type(entity_id)](#int-get_entity_typeentityid-entity_id-)
* [play_ambient_sound(sound_path, index)](#void-play_ambient_soundstring-sound_path--int-index-)
* [play_sound(sound_path, index, x, y)](#void-play_soundstring-sound_path--int-index--fixedpoint-x--fixedpoint-y-)
* [create_explosion(x, y, color, scale, particle_count)](#void-create_explosionfixedpoint-x--fixedpoint-y--int-color--fixedpoint-scale--int-particle_count-)
* [new_asteroid(x, y)](#entityid-new_asteroidfixedpoint-x--fixedpoint-y-)
* [new_asteroid_with_size(x, y, size)](#entityid-new_asteroid_with_sizefixedpoint-x--fixedpoint-y--int-size-)
* [new_baf(x, y, angle, speed, lifetime)](#entityid-new_baffixedpoint-x--fixedpoint-y--fixedpoint-angle--fixedpoint-speed--int-lifetime-)
* [new_baf_red(x, y, angle, speed, lifetime)](#entityid-new_baf_redfixedpoint-x--fixedpoint-y--fixedpoint-angle--fixedpoint-speed--int-lifetime-)
* [new_baf_blue(x, y, angle, speed, lifetime)](#entityid-new_baf_bluefixedpoint-x--fixedpoint-y--fixedpoint-angle--fixedpoint-speed--int-lifetime-)
* [new_bomb(x, y, type)](#entityid-new_bombfixedpoint-x--fixedpoint-y--int-type-)
* [new_bonus(x, y, type, config)](#entityid-new_bonusfixedpoint-x--fixedpoint-y--int-type--map-int-box_duration--int-cannon--int-frequency--int-weapon_duration--int-number_of_shields--fixedpoint-speed_factor--fixedpoint-speed_offset--int-speed_duration--callback-taken_callback-config-)
* [new_crowder(x, y)](#entityid-new_crowderfixedpoint-x--fixedpoint-y-)
* [new_floating_message(x, y, str, config)](#entityid-new_floating_messagefixedpoint-x--fixedpoint-y--string-str--map-fixedpoint-scale--int-ticks_before_fade--boolean-is_optional-config-)
* [new_customizable_entity(x, y)](#entityid-new_customizable_entityfixedpoint-x--fixedpoint-y-)
* [new_inertiac(x, y, acceleration, angle)](#entityid-new_inertiacfixedpoint-x--fixedpoint-y--fixedpoint-acceleration--fixedpoint-angle-)
* [new_mothership(x, y, type, angle)](#entityid-new_mothershipfixedpoint-x--fixedpoint-y--int-type--fixedpoint-angle-)
* [new_pointonium(x, y, value)](#entityid-new_pointoniumfixedpoint-x--fixedpoint-y--int-value-)
* [new_player_ship(x, y, player_index)](#entityid-new_player_shipfixedpoint-x--fixedpoint-y--int-player_index-)
* [new_player_bullet(x, y, angle, player_index)](#entityid-new_player_bulletfixedpoint-x--fixedpoint-y--fixedpoint-angle--int-player_index-)
* [new_rolling_cube(x, y)](#entityid-new_rolling_cubefixedpoint-x--fixedpoint-y-)
* [new_rolling_sphere(x, y, angle, speed)](#entityid-new_rolling_spherefixedpoint-x--fixedpoint-y--fixedpoint-angle--fixedpoint-speed-)
* [new_wary(x, y)](#entityid-new_waryfixedpoint-x--fixedpoint-y-)
* [new_ufo(x, y, dx)](#entityid-new_ufofixedpoint-x--fixedpoint-y--fixedpoint-dx-)
* [rolling_cube_set_enable_collisions_with_walls(entity_id, collide_with_walls)](#void-rolling_cube_set_enable_collisions_with_wallsentityid-entity_id--boolean-collide_with_walls-)
* [ufo_set_enable_collisions_with_walls(entity_id, collide_with_walls)](#void-ufo_set_enable_collisions_with_wallsentityid-entity_id--boolean-collide_with_walls-)
* [entity_get_position(entity_id)](#fixedpoint-fixedpoint-entity_get_positionentityid-entity_id-)
* [entity_get_is_alive(entity_id)](#boolean-entity_get_is_aliveentityid-entity_id-)
* [entity_get_is_started_to_be_destroyed(entity_id)](#boolean-entity_get_is_started_to_be_destroyedentityid-entity_id-)
* [entity_set_position(entity_id, x, y)](#void-entity_set_positionentityid-entity_id--fixedpoint-x--fixedpoint-y-)
* [entity_set_radius(entity_id, radius)](#void-entity_set_radiusentityid-entity_id--fixedpoint-radius-)
* [entity_set_update_callback(entity_id, callback)](#void-entity_set_update_callbackentityid-entity_id--callback-callback-)
* [entity_destroy(entity_id)](#void-entity_destroyentityid-entity_id-)
* [entity_react_to_weapon(entity_id, weapon)](#boolean-entity_react_to_weaponentityid-entity_id--map-int-type--fixedpoint-x--fixedpoint-y--int-player_index-weapon-)
* [customizable_entity_set_position_interpolation(entity_id, enable)](#void-customizable_entity_set_position_interpolationentityid-entity_id--boolean-enable-)
* [customizable_entity_set_mesh(entity_id, file_path, index)](#void-customizable_entity_set_meshentityid-entity_id--string-file_path--int-index-)
* [customizable_entity_set_flipping_meshes(entity_id, file_path, index_0, index_1)](#void-customizable_entity_set_flipping_meshesentityid-entity_id--string-file_path--int-index_0--int-index_1-)
* [customizable_entity_set_mesh_color(entity_id, color)](#void-customizable_entity_set_mesh_colorentityid-entity_id--int-color-)
* [customizable_entity_set_string(entity_id, text)](#void-customizable_entity_set_stringentityid-entity_id--string-text-)
* [customizable_entity_set_mesh_xyz(entity_id, x, y, z)](#void-customizable_entity_set_mesh_xyzentityid-entity_id--fixedpoint-x--fixedpoint-y--fixedpoint-z-)
* [customizable_entity_set_mesh_z(entity_id, z)](#void-customizable_entity_set_mesh_zentityid-entity_id--fixedpoint-z-)
* [customizable_entity_set_mesh_scale(entity_id, scale)](#void-customizable_entity_set_mesh_scaleentityid-entity_id--fixedpoint-scale-)
* [customizable_entity_set_mesh_xyz_scale(entity_id, x_scale, y_scale, z_scale)](#void-customizable_entity_set_mesh_xyz_scaleentityid-entity_id--fixedpoint-x_scale--fixedpoint-y_scale--fixedpoint-z_scale-)
* [customizable_entity_set_mesh_angle(entity_id, angle, x_axis, y_axis, z_axis)](#void-customizable_entity_set_mesh_angleentityid-entity_id--fixedpoint-angle--fixedpoint-x_axis--fixedpoint-y_axis--fixedpoint-z_axis-)
* [customizable_entity_skip_mesh_attributes_interpolation(entity_id)](#void-customizable_entity_skip_mesh_attributes_interpolationentityid-entity_id-)
* [customizable_entity_configure_music_response(entity_id, config)](#void-customizable_entity_configure_music_responseentityid-entity_id--map-int-color_start--int-color_end--fixedpoint-scale_x_start--fixedpoint-scale_x_end--fixedpoint-scale_y_start--fixedpoint-scale_y_end--fixedpoint-scale_z_start--fixedpoint-scale_z_end-config-)
* [customizable_entity_add_rotation_to_mesh(entity_id, angle, x_axis, y_axis, z_axis)](#void-customizable_entity_add_rotation_to_meshentityid-entity_id--fixedpoint-angle--fixedpoint-x_axis--fixedpoint-y_axis--fixedpoint-z_axis-)
* [customizable_entity_set_visibility_radius(entity_id, radius)](#void-customizable_entity_set_visibility_radiusentityid-entity_id--fixedpoint-radius-)
* [customizable_entity_configure_wall_collision(entity_id, collide_with_walls, collision_callback)](#void-customizable_entity_configure_wall_collisionentityid-entity_id--boolean-collide_with_walls--callback-collision_callback-)
* [customizable_entity_set_player_collision_callback(entity_id, collision_callback)](#void-customizable_entity_set_player_collision_callbackentityid-entity_id--callback-collision_callback-)
* [customizable_entity_set_weapon_collision_callback(entity_id, weapon_collision_callback)](#void-customizable_entity_set_weapon_collision_callbackentityid-entity_id--callback-weapon_collision_callback-)
* [customizable_entity_start_spawning(entity_id, spawning_duration)](#void-customizable_entity_start_spawningentityid-entity_id--int-spawning_duration-)
* [customizable_entity_start_exploding(entity_id, explosion_duration)](#void-customizable_entity_start_explodingentityid-entity_id--int-explosion_duration-)
## enums
### EntityType
 * ASTEROID
 * BAF
 * INERTIAC
 * MOTHERSHIP
 * MOTHERSHIP_BULLET
 * ROLLING_CUBE
 * ROLLING_SPHERE
 * UFO
 * WARY
 * CROWDER
 * CUSTOMIZABLE_ENTITY
 * SHIP
 * BOMB
 * BAF_BLUE
 * BAF_RED
 * WARY_MISSILE
 * UFO_BULLET
 * PLAYER_BULLET
 * BOMB_EXPLOSION
 * PLAYER_EXPLOSION
 * BONUS
 * FLOATING_MESSAGE
 * POINTONIUM
 * BONUS_IMPLOSION
### MothershipType
 * THREE_CORNERS
 * FOUR_CORNERS
 * FIVE_CORNERS
 * SIX_CORNERS
 * SEVEN_CORNERS
### CannonType
 * SINGLE
 * TIC_TOC
 * DOUBLE
 * TRIPLE
 * FOUR_DIRECTIONS
 * DOUBLE_SWIPE
 * HEMISPHERE
### CannonFrequency
 * FREQ_30
 * FREQ_15
 * FREQ_10
 * FREQ_7_5
 * FREQ_6
 * FREQ_5
 * FREQ_3
 * FREQ_2
 * FREQ_1
### BombType
 * FREEZE
 * REPULSIVE
 * ATOMIZE
 * SMALL_ATOMIZE
 * SMALL_FREEZE
### BonusType
 * REINSTANTIATION
 * SHIELD
 * SPEED
 * WEAPON
### WeaponType
 * BULLET
 * FREEZE_EXPLOSION
 * REPULSIVE_EXPLOSION
 * ATOMIZE_EXPLOSION
### AsteroidSize
 * SMALL
 * MEDIUM
 * LARGE
 * VERY_LARGE
## functions
### _void_ print(_String_ `str` )
Prints `str` in the console for debugging.
> ```lua
> local some_number = 42
> pewpew.print("the value of some_number is: " .. some_number)
> ```
### _void_ print_debug_info()
Prints debug info: the number of entities created and the amount of memory used by the script.
> ```lua
> pewpew.print_debug_info()
> ```
### _void_ set_level_size(_FixedPoint_ `width` , _FixedPoint_ `height` )
Sets the level's size. Implicetely adds walls to make sure that entities can not go outside of the level's boundaries. `width` and `height` are clamped to the range ]0fx, 6000fx]. If this function is not called, the level size is (10fx, 10fx), which is uselessly small for most cases.
> ```lua
> local width = 300fx
> local height = 200fx
> pewpew.set_level_size(width, height)
> ```
### _int_ add_wall(_FixedPoint_ `start_x` , _FixedPoint_ `start_y` , _FixedPoint_ `end_x` , _FixedPoint_ `end_y` )
Adds a wall to the level from (`start_x`,`start_y`) to (`end_x`,`end_y`), and returns its wall ID. A maximum of 200 walls can be added to a level.
> ```lua
> pewpew.add_wall(100fx, 100fx, 200fx, 200fx)
> ```
### _void_ remove_wall(_int_ `wall_id` )
Remove the wall with the given `wall_id`.
> ```lua
> local wall_id = pewpew.add_wall(100fx, 100fx, 200fx, 200fx)
> -- Later, when the wall needs to be removed:
> pewpew.remove_wall(wall_id)
> ```
### _void_ add_update_callback(_Callback_ `update_callback` )
Adds a callback that will be updated at each game tick.
> ```lua
> local tick_count = 0
> pewpew.add_update_callback(function()
>   pewpew.print("this is tick " .. tick_count)
>   tick_count = tick_count + 1
> end)
> ```
### _int_ get_number_of_players()
Returns the number of players in the game.
### _void_ increase_score_of_player(_int_ `player_index` , _int_ `delta` )
Increases the score of the player at the specified `player_index` by an amount of `delta`. `player_index` must in the range [0, get_number_of_players() - 1]. Note that `delta` can be negative.
### _void_ increase_score_streak_of_player(_int_ `player_index` , _int_ `delta` )
Increases the score streak counter of the player at the specified `player_index` by an amount of `delta`. This counter is used to determine at which level of score streak the player is at. In turn, the score streak level is used to determine how much pointonium is given. Typically the score streak counter should be increased when an enemy is destroyed with the same score that the enemy provide. `player_index` must in the range [0, get_number_of_players() - 1]. Note that `delta` can be negative.
### _int_ get_score_streak_level(_int_ `player_index` )
Returns a number between 0 and 3. 0 is the lowest score streak (no pointonium is given), while 3 is the highest (3 pointoniums is usually given)
### _void_ stop_game()
Ends the current game.
### _FixedPoint_, _FixedPoint_, _FixedPoint_, _FixedPoint_ get_player_inputs(_int_ `player_index` )
Returns the inputs of the player at the specified `index`. The return values are in order: the movement joystick's angle (between 0 and 2pi), the movement joystick's distance (between 0 and 1), the shoot joystick's angle (between 0 and 2pi), and the shoot joystick's distance (between 0 and 1).
> ```lua
> local move_angle, move_distance, shoot_angle, shoot_distance = pewpew.get_player_inputs(0)
> ```
### _int_ get_score_of_player(_int_ `player_index` )
Returns the score of the player at the specified `player_index`. `player_index` must in the range [0, get_number_of_players() - 1].
### _void_ configure_player(_int_ `player_index` , _Map_ \{_boolean_ has_lost , _int_ shield , _FixedPoint_ camera_x_override , _FixedPoint_ camera_y_override , _FixedPoint_ camera_distance , _FixedPoint_ camera_rotation_x_axis , _int_ move_joystick_color , _int_ shoot_joystick_color\} `configuration` )
Configures the player at the specified `player_index`. `player_index` must in the range [0, get_number_of_players() - 1]. A `camera_distance` less than 0fx makes the camera move away from the ship. `camera_rotation_x_axis` is in radian and rotates along the X axis.
 To temporarily override the XY position of the camera, set both `camera_x_override` and `camera_y_override`; this will make the camera be interpolated from wherever it was, to that new position.
> ```lua
> pewpew.configure_player(0, {shield = 3, camera_distance = 50fx, move_joystick_color = 0xffff00ff})
> ```
### _void_ configure_player_hud(_int_ `player_index` , _Map_ \{_String_ top_left_line\} `configuration` )
Configures the player's HUD.`player_index` must in the range [0, get_number_of_players() - 1].
> ```lua
> pewpew.configure_player_hud(0, {top_left_line = "Hello World"})
> ```
### _Map_ \{_int_ shield , _boolean_ has_lost\} get_player_configuration(_int_ `player_index` )
Returns a map containing the configuration of the player at the specified `player_index`.
> ```lua
> local shield = pewpew.get_player_configuration(0).shield
> ```
### _void_ configure_player_ship_weapon(_EntityId_ `ship_id` , _Map_ \{_int_ frequency , _int_ cannon , _int_ duration\} `configuration` )
Configures the weapon of the ship identified with `ship_id` using `configuration`. `frequency` determines the frequency of the shots. `cannon` determines the type of cannon. `duration` determines the number of game ticks during which the weapon will be available. Once the duration expires, the weapon reverts to its permanent configuration. If `duration` is omitted, the weapon will be permanently set to this configuration. If `frequency` or `cannon` is omitted, the ship is configured to not have any weapon.
> ```lua
> local weapon_config = {frequency = pewpew.CannonFrequency.FREQ_10, cannon = pewpew.CannonType.DOUBLE}
> local ship_id = player_helpers.new_player_ship(100fx, 200fx, 0)
> pewpew.configure_player_ship_weapon(ship_id, weapon_config)
> ```
### _void_ add_damage_to_player_ship(_EntityId_ `ship_id` , _int_ `damage` )
Reduces the amount of shield of the player that owns the ship by `damage` points. If the player receives damage while having 0 shields left, the player loses.
### _int_ add_arrow_to_player_ship(_EntityId_ `ship_id` , _EntityId_ `target_id` , _int_ `color` )
Adds an arrow to the ship identified with `ship_id` pointing towards the entity identified with `entity_id`, and returns the identifier of the arrow. `color` specifies the arrow's color. The arrow is automatically removed when the target entity is destroyed.
### _void_ remove_arrow_from_player_ship(_EntityId_ `ship_id` , _int_ `arrow_id` )
Removes the arrow identified by `arrow_id` from the ship identified by `ship_id`.
### _void_ make_player_ship_transparent(_EntityId_ `ship_id` , _int_ `transparency_duration` )
Makes the player ship transparent for `transparency_duration` game ticks.
### _FixedPoint_ set_player_ship_speed(_EntityId_ `ship_id` , _FixedPoint_ `factor` , _FixedPoint_ `offset` , _int_ `duration` )
Sets and returns the **effective speed** of the specified player ship as a function of the **base speed** of the ship. By default, a player ship moves according to its base speed, which is 10 distance units per tick (in the future, different ships may have different base speeds). 
Assuming the base speed of the ship is S, the new effective speed will be `(factor*S)+offset`. `duration` is the number of ticks during which the effective speed will be applied. Afterwards, the ship's speed reverts to its base speed. If `duration` is negative, the effective speed never reverts to the base speed.
### _List_ &lt;_EntityId_&gt; get_all_entities()
Returns the list of the entityIDs of all the entities currently in the level. This includes the various bullets and *all* the custom entities.
> ```lua
> local entities = pewpew.get_all_entities()
> pewpew.print("There are " .. #entities .. " entities in the level")
> ```
### _List_ &lt;_EntityId_&gt; get_entities_colliding_with_disk(_FixedPoint_ `center_x` , _FixedPoint_ `center_y` , _FixedPoint_ `radius` )
Returns the list of collidable entities (which includes all enemies) that overlap with the given disk.
> ```lua
> local entities = pewpew.get_entities_colliding_with_disk(100fx, 100fx, 30fx)
> ```
### _int_ get_entity_count(_int_ `type` )
Returns the number of entities of type `type` that are alive.
> ```lua
> local number_of_bafs = pewpew.get_entity_count(pewpew.EntityType.BAF)
> local number_of_asteroids = pewpew.get_entity_count(pewpew.EntityType.ASTEROID)
> ```
### _int_ get_entity_type(_EntityId_ `entity_id` )
Returns the type of the given entity.
> ```lua
> local type = pewpew.get_entity_type(id)
> if type == pewpew.EntityType.BAF then
>   pewpew.print("the entity is a BAF")
> end
> ```
### _void_ play_ambient_sound(_String_ `sound_path` , _int_ `index` )
Plays the sound described at `sound_path` at the index `index`.
> ```lua
> pewpew.play_ambient_sound("/dynamic/my_custom_sound.lua", 0)
> ```
### _void_ play_sound(_String_ `sound_path` , _int_ `index` , _FixedPoint_ `x` , _FixedPoint_ `y` )
Plays the sound described at `sound_path` at the in-game location of `x`,`y`.
> ```lua
> pewpew.play_sound("/dynamic/my_custom_sound.lua", 0, 100fx, 100fx)
> ```
### _void_ create_explosion(_FixedPoint_ `x` , _FixedPoint_ `y` , _int_ `color` , _FixedPoint_ `scale` , _int_ `particle_count` )
Creates an explosion of particles at the location `x`,`y`. `color` specifies the color of the explosion. `scale` describes how large the explosion will be. It should be in the range ]0, 10], with 1 being an average explosion. `particle_count` specifies the number of particles that make up the explosion. It must be in the range [1, 100].
> ```lua
> pewpew.create_explosion(200fx, 100fx, 0xffffffff, 1fx, 20) -- medium explosion
> pewpew.create_explosion(300fx, 100fx, 0xffffffff, 3fx, 50) -- large red explosion
> ```
### _EntityId_ new_asteroid(_FixedPoint_ `x` , _FixedPoint_ `y` )
Creates a new Asteroid at the location `x`,`y` and returns its entityId.
### _EntityId_ new_asteroid_with_size(_FixedPoint_ `x` , _FixedPoint_ `y` , _int_ `size` )
Creates a new Asteroid at the location `x`,`y` with an AsteroidSize given by `size` and returns its entityId.
### _EntityId_ new_baf(_FixedPoint_ `x` , _FixedPoint_ `y` , _FixedPoint_ `angle` , _FixedPoint_ `speed` , _int_ `lifetime` )
Creates a new BAF at the location `x`,`y`, and returns its entityId. `angle` specifies the angle at which the BAF will move. `speed` specifies the maximum speed it will reach. `lifetime` indicates the number of game ticks after which the BAF is destroyed the next time it hits a wall. Specify a negative `lifetime` to create a BAF that lives forever.
### _EntityId_ new_baf_red(_FixedPoint_ `x` , _FixedPoint_ `y` , _FixedPoint_ `angle` , _FixedPoint_ `speed` , _int_ `lifetime` )
Creates a new red BAF at the location `x`,`y`, and returns its entityId. A red BAF has more health points than a regular BAF. `angle` specifies the angle at which the BAF will move. `speed` specifies the maximum speed it will reach. `lifetime` indicates the number of game ticks after which the BAF is destroyed the next time it hits a wall. Specify a negative `lifetime` to create a BAF that lives forever.
### _EntityId_ new_baf_blue(_FixedPoint_ `x` , _FixedPoint_ `y` , _FixedPoint_ `angle` , _FixedPoint_ `speed` , _int_ `lifetime` )
Creates a new blue BAF at the location `x`,`y`, and returns its entityId. A blue BAF bounces on walls with a slightly randomized angle. `angle` specifies the angle at which the BAF will move. `speed` specifies the maximum speed it will reach. `lifetime` indicates the number of game ticks after which the BAF is destroyed the next time it hits a wall. Specify a negative `lifetime` to create a BAF that lives forever.
### _EntityId_ new_bomb(_FixedPoint_ `x` , _FixedPoint_ `y` , _int_ `type` )
Creates a new Bomb at the location `x`,`y`, and returns its entityId.
> ```lua
> pewpew.new_bomb(10fx, 10fx, pewpew.BombType.SMALL_ATOMIZE)
> ```
### _EntityId_ new_bonus(_FixedPoint_ `x` , _FixedPoint_ `y` , _int_ `type` , _Map_ \{_int_ box_duration , _int_ cannon , _int_ frequency , _int_ weapon_duration , _int_ number_of_shields , _FixedPoint_ speed_factor , _FixedPoint_ speed_offset , _int_ speed_duration , _Callback_ taken_callback\} `config` )
Creates a new Bonus at the location `x`,`y` of the type `type`, and returns its entityId.
 For shield bonuses, the option `number_of_shields` determines how many shields are given out. 
For weapon bonuses, the options `cannon`, `frequency`, `weapon_duration` have the same meaning as in `pewpew.configure_player_ship_weapon`. 
For speed bonuses, the options `speed_factor`, `speed_offset`,and `speed_duration` have the same meaning as in `set_player_speed`. `taken_callback` is called when the bonus is taken, and is mandatory for the reinstantiation bonus. The callback receives as arguments the entity id of the bonus, the player id, and the ship's entity id.
 The default box duration is 400 ticks.
> ```lua
> pewpew.new_bonus(10fx, 10fx, pewpew.BonusType.WEAPON, {cannon = pewpew.CannonType.TIC_TOC, frequency = pewpew.CannonFrequency.FREQ_5, weapon_duration = 100})
> pewpew.new_bonus(10fx, 10fx, pewpew.BonusType.SHIELD, {number_of_shields = 3})
> ```
### _EntityId_ new_crowder(_FixedPoint_ `x` , _FixedPoint_ `y` )
Creates a new Crowder at the location `x`,`y`, and returns its entityId.
### _EntityId_ new_floating_message(_FixedPoint_ `x` , _FixedPoint_ `y` , _String_ `str` , _Map_ \{_FixedPoint_ scale , _int_ ticks_before_fade , _boolean_ is_optional\} `config` )
Creates a new floating message at the location `x`,`y`, with `str` as the message. The scale is a number that determines how large the  message will be. `1` is the default scale. `ticks_before_fade` determines how many ticks occur before the message starts to fade out. `is_optional` can be used to tell the game if the message can be hidden depending on the user's UI settings.
If not specified, `scale` is 1, `ticks_before_fade` is 30 and `is_optional` is `false`.
 Returns the floating message's entityId.
> ```lua
> pewpew.new_floating_message(10fx, 10fx, "hello", {scale = 2fx, ticks_before_fade = 60, is_optional = true})
> ```
### _EntityId_ new_customizable_entity(_FixedPoint_ `x` , _FixedPoint_ `y` )
Creates a new customizable entity at the location `x`,`y`, and returns its entityId.
### _EntityId_ new_inertiac(_FixedPoint_ `x` , _FixedPoint_ `y` , _FixedPoint_ `acceleration` , _FixedPoint_ `angle` )
Creates a new Inertiac at the location `x`,`y`, and returns its entityId. The inertiac will accelerate according to `acceleration`. It spawns with a random velocity in a direction specified by `angle`.
### _EntityId_ new_mothership(_FixedPoint_ `x` , _FixedPoint_ `y` , _int_ `type` , _FixedPoint_ `angle` )
Creates a new Mothership at the location `x`,`y`, and returns its entityId.
> ```lua
> pewpew.new_mothership(50fx, 50fx, pewpew.MothershipType.THREE_CORNERS, fmath.tau() / 4fx)
> ```
### _EntityId_ new_pointonium(_FixedPoint_ `x` , _FixedPoint_ `y` , _int_ `value` )
Creates a new Pointonium at the location `x`,`y`. Value must be 64, 128, or 256.
### _EntityId_ new_player_ship(_FixedPoint_ `x` , _FixedPoint_ `y` , _int_ `player_index` )
Creates a new Player Ship at the location `x`,`y` for the player identified by `player_index`, and returns its entityId.
### _EntityId_ new_player_bullet(_FixedPoint_ `x` , _FixedPoint_ `y` , _FixedPoint_ `angle` , _int_ `player_index` )
Creates a new bullet at the location `x`,`y` with the angle `angle` belonging to the player at the index `player_index`. Returns the entityId of the bullet.
### _EntityId_ new_rolling_cube(_FixedPoint_ `x` , _FixedPoint_ `y` )
Creates a new Rolling Cube at the location `x`,`y`, and returns its entityId.
### _EntityId_ new_rolling_sphere(_FixedPoint_ `x` , _FixedPoint_ `y` , _FixedPoint_ `angle` , _FixedPoint_ `speed` )
Creates a new Rolling Sphere at the location `x`,`y`, and returns its entityId.
### _EntityId_ new_wary(_FixedPoint_ `x` , _FixedPoint_ `y` )
Creates a new Wary at the location `x`,`y`.
### _EntityId_ new_ufo(_FixedPoint_ `x` , _FixedPoint_ `y` , _FixedPoint_ `dx` )
Creates a new UFO at the location `x`,`y` moving horizontally at the speed of `dx`, and returns its entityId.
### _void_ rolling_cube_set_enable_collisions_with_walls(_EntityId_ `entity_id` , _boolean_ `collide_with_walls` )
Sets whether the rolling cube identified with `id` collides with walls. By default it does not.
> ```lua
> local x,y = pewpew.rolling_cube_set_enable_collisions_with_walls(id, true)
> ```
### _void_ ufo_set_enable_collisions_with_walls(_EntityId_ `entity_id` , _boolean_ `collide_with_walls` )
Sets whether the ufo identified with `id` collides with walls. By default it does not.
> ```lua
> local x,y = pewpew.ufo_set_enable_collisions_with_walls(id, true)
> ```
### _FixedPoint_, _FixedPoint_ entity_get_position(_EntityId_ `entity_id` )
Returns the position of the entity identified by `id`.
> ```lua
> local x,y = pewpew.entity_get_position(entity_id)
> ```
### _boolean_ entity_get_is_alive(_EntityId_ `entity_id` )
Returns whether the entity identified by `id` is alive or not.
### _boolean_ entity_get_is_started_to_be_destroyed(_EntityId_ `entity_id` )
Returns whether the entity identified by `id` is in the process of being destroyed. Returns false if the entity does not exist.
### _void_ entity_set_position(_EntityId_ `entity_id` , _FixedPoint_ `x` , _FixedPoint_ `y` )
Sets the position of the entity identified by `id` to `x`,`y`
### _void_ entity_set_radius(_EntityId_ `entity_id` , _FixedPoint_ `radius` )
Sets the radius of the entity identified by `id`. To give you a sense of scale, motherships have a radius of 28fx.
### _void_ entity_set_update_callback(_EntityId_ `entity_id` , _Callback_ `callback` )
Sets a callback that will be called at every tick as long as the entity identified by `id` is alive. Remove the callback by passing a nil `callback`. The callbacks gets called with the entity ID.
> ```lua
> local function my_update_callback(entity_id)
>   local x,y = pewpew.entity_get_position(entity_id)
>   pewpew.entity_set_position(entity_id, x + 2fx, y) -- move the entity to the right
> end
> pewpew.entity_set_update_callback(entity_id, my_update_callback)
> ```
### _void_ entity_destroy(_EntityId_ `entity_id` )
Makes the entity identified by `id` immediately disappear forever.
### _boolean_ entity_react_to_weapon(_EntityId_ `entity_id` , _Map_ \{_int_ type , _FixedPoint_ x , _FixedPoint_ y , _int_ player_index\} `weapon` )
Makes the entity identified by `id` react to the weapon described in `weapon_description`. Returns whether the entity reacted to the weapon. The returned value is typically used to decide whether the weapon should continue to exist or not. In the case of an explosion, `x` and `y` should store the origin of the explosion. In the case of a bullet, `x` and `y` should store the vector of the bullet. The player identified by `player_index` will be assigned points. If `player_index` is invalid, no player will be assigned points.
### _void_ customizable_entity_set_position_interpolation(_EntityId_ `entity_id` , _boolean_ `enable` )
Sets whether the position of the mesh wil be interpolated when rendering. In general, this should be set to true if the entity will be moving smoothly.
### _void_ customizable_entity_set_mesh(_EntityId_ `entity_id` , _String_ `file_path` , _int_ `index` )
Sets the mesh of the customizable entity identified by `id` to the mesh described in the file `file_path` at the index `index`. `index` starts at 0. If `file_path` is an empty string, the mesh is removed.
> ```lua
> local id = pewpew.new_customizable_entity(0fx, 0fx)
> pewpew.customizable_entity_set_mesh(id, "/dynamic/graphics.lua", 0)
> ```
### _void_ customizable_entity_set_flipping_meshes(_EntityId_ `entity_id` , _String_ `file_path` , _int_ `index_0` , _int_ `index_1` )
Similar to `customizable_entity_set_mesh`, but sets two meshes that will be used in alternation. By specifying 2 separate meshes, 60 fps animations can be achieved.
> ```lua
> local id = pewpew.new_customizable_entity(0fx, 0fx)
> pewpew.customizable_entity_set_flipping_meshes(id, "/dynamic/graphics.lua", 0, 1)
> ```
### _void_ customizable_entity_set_mesh_color(_EntityId_ `entity_id` , _int_ `color` )
Sets the color multiplier for the mesh of the customizable entity identified by `id`.
### _void_ customizable_entity_set_string(_EntityId_ `entity_id` , _String_ `text` )
Sets the string to be displayed as part of the mesh of the customizable entity identified by `id`.
### _void_ customizable_entity_set_mesh_xyz(_EntityId_ `entity_id` , _FixedPoint_ `x` , _FixedPoint_ `y` , _FixedPoint_ `z` )
Sets the position of the mesh to x,y,z, relative to the center ofthe customizable entity identified by `id`
### _void_ customizable_entity_set_mesh_z(_EntityId_ `entity_id` , _FixedPoint_ `z` )
Sets the height of the mesh of the customizable entity identified by `id`. A `z` greater to 0 makes the mesh be closer, while a `z` less than 0 makes the mesh be further away.
### _void_ customizable_entity_set_mesh_scale(_EntityId_ `entity_id` , _FixedPoint_ `scale` )
Sets the scale of the mesh of the customizable entity identified by `id`. A `scale` less than 1 makes the mesh appear smaller, while a `scale` greater than 1 makes the mesh appear larger.
### _void_ customizable_entity_set_mesh_xyz_scale(_EntityId_ `entity_id` , _FixedPoint_ `x_scale` , _FixedPoint_ `y_scale` , _FixedPoint_ `z_scale` )
Sets the scale of the mesh of the customizable entity identified by `id` along the x,y,z axis. A `scale` less than 1 makes the mesh appear smaller, while a `scale` greater than 1 makes the mesh appear larger.
### _void_ customizable_entity_set_mesh_angle(_EntityId_ `entity_id` , _FixedPoint_ `angle` , _FixedPoint_ `x_axis` , _FixedPoint_ `y_axis` , _FixedPoint_ `z_axis` )
Sets the rotation angle of the mesh of the customizable entity identified by `id`. The rotation is applied along the axis defined by `x_axis`,`y_axis`,`z_axis`.
> ```lua
> -- Rotate the entity by 45 degrees along the z_axis
> pewpew.customizable_entity_set_mesh_angle(entity_id, fmath.tau() / 8fx, 0fx, 0fx, 1fx)
> ```
### _void_ customizable_entity_skip_mesh_attributes_interpolation(_EntityId_ `entity_id` )
Skips the interpolation of the mesh's attributes (x, y, z, scale_x, scale_y, scale_z, rotation).
### _void_ customizable_entity_configure_music_response(_EntityId_ `entity_id` , _Map_ \{_int_ color_start , _int_ color_end , _FixedPoint_ scale_x_start , _FixedPoint_ scale_x_end , _FixedPoint_ scale_y_start , _FixedPoint_ scale_y_end , _FixedPoint_ scale_z_start , _FixedPoint_ scale_z_end\} `config` )
Configures the way the entity is going to respond to the music.
> ```lua
>   -- Makes the entity larger
>   pewpew.customizable_entity_configure_music_response(entity_id, {scale_x_start = 1fx, scale_x_end = 2fx})
> ```
### _void_ customizable_entity_add_rotation_to_mesh(_EntityId_ `entity_id` , _FixedPoint_ `angle` , _FixedPoint_ `x_axis` , _FixedPoint_ `y_axis` , _FixedPoint_ `z_axis` )
Adds a rotation to the mesh of the customizable entity identified by `id`. The rotation is applied along the axis defined by `x_axis`,`y_axis`,`z_axis`.
> ```lua
> -- Rotate the entity by 45 degrees along the z_axis
> pewpew.customizable_entity_add_rotation_to_mesh(entity_id, fmath.tau() / 8fx, 0fx, 0fx, 1fx)
> ```
### _void_ customizable_entity_set_visibility_radius(_EntityId_ `entity_id` , _FixedPoint_ `radius` )
Sets the radius defining the visibility of the entity. This allows the game to know when an entity is actually visible, which in turns allows to massively optimize the rendering. Use the smallest value possible. If not set, the rendering radius is an unspecified large number that effectively makes the entity always be rendered, even if not visible.
### _void_ customizable_entity_configure_wall_collision(_EntityId_ `entity_id` , _boolean_ `collide_with_walls` , _Callback_ `collision_callback` )
`collide_with_walls` configures whether the entity should stop when colliding with walls. If `collision_callback` is not nil, it is called anytime a collision is detected. The callback gets called with the entity id of the entity withthe callback, and with the normal to the wall.
> ```lua
> function my_wall_collision_callback(entity_id, wall_normal_x, wall_normal_y)
>   pewpew.print("A wall collision happened with entity " .. entity_id)
> end
> local id = pewpew.new_customizable_entity(100fx, 100fx)
> pewpew.customizable_entity_configure_wall_collision(id, my_wall_collision_callback)
> ```
### _void_ customizable_entity_set_player_collision_callback(_EntityId_ `entity_id` , _Callback_ `collision_callback` )
Sets the callback for when the customizable entity identified by `id` collides with a player's ship. The callback gets called with the entity id of the entity with the callback, and the player_index and ship_id that were involved in the collision. Don't forget to set a radius on the customizable entity, otherwise no collisions will be detected.
> ```lua
> function my_collision_callback(entity_id, player_index, ship_entity_id)
>   pewpew.print("The entity: " .. entity_id)
>   pewpew.print("Collided with the ship: " .. ship_entity_id)
>   pewpew.print("That belongs to the player: " .. player_index)
> end
> local id = pewpew.new_customizable_entity(100fx, 100fx)
> pewpew.customizable_entity_set_player_collision_callback(id, my_collision_callback)
> ```
### _void_ customizable_entity_set_weapon_collision_callback(_EntityId_ `entity_id` , _Callback_ `weapon_collision_callback` )
Sets the callback for when the customizable entity identified by `id` collides with a player's weapon. The callback gets called with the entity_id of the entity on which the callback is set, the player_index of the player that triggered the weapon, and the type of the weapon. The callback *must* return a boolean saying whether the entity reacts to the weapon. In the case of a bullet, this boolean determines whether the bullet should be destroyed.
> ```lua
> local id = pewpew.new_customizable_entity(100fx, 100fx)
> pewpew.customizable_entity_set_weapon_collision_callback(id, function(entity_id, player_index, weapon_type)
>   pewpew.print("Collided with weapon from player: " .. player_index)
>   if weapon_type == pewpew.WeaponType.BULLET then
>     pewpew.print("Collided with bullet!")
>   end
>   return true
> end)
> ```
### _void_ customizable_entity_start_spawning(_EntityId_ `entity_id` , _int_ `spawning_duration` )
Makes the customizable entity identified by `id` spawn for a duration of `spawning_duration` game ticks.
### _void_ customizable_entity_start_exploding(_EntityId_ `entity_id` , _int_ `explosion_duration` )
Makes the customizable entity identified by `id` explode for a duration of `explosion_duration` game ticks. After the explosion, the entity is destroyed. `explosion_duration` must be less than 255. Any scale applied to the entity is also applied to the explosion.